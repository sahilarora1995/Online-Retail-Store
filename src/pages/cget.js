import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  {Card,Navbar,Nav,Container,Row,Jumbotron,Col,Table,ButtonGroup,Button} from 'react-bootstrap'
import Glyphicon from '@strongdm/glyphicon'
//import {faList} from '@fontawesome/free-solid=svg-icon'
class cget extends Component{

constructor(props)
{
  super(props)

  this.state={
    gets:[]
  }
}


componentDidMount(){

axios.get('http://localhost:8080/customer/',{"Access-Control-Allow-Origin": "*"})
.then(response =>{
console.log(response.data)
this.setState({
  gets:response.data
})
})
.catch(error=>{

  console.log(error)
})
};

deleteProd = (itemId) => {
  axios.delete("http://localhost:8080/customer/"+itemId + '/', {"Access-Control-Allow-Origin": "*"})
            .then(response => {
                if(response.data != null) {
                    this.setState({"show":true});
                    setTimeout(() => this.setState({"show":false}), 3000);
                    this.setState({
                        gets: this.state.gets.filter(get => get.id !== itemId)
                    });
                } else {
                    this.setState({"show":false});
                }
            });
};

  render()
  {
    const{
      gets
    }=this.state
    const marginTop={
      marginTop:"20px",
      alignItems:"center"
    }
    const hide={
      visibility:"hidden"
    }
    return(


      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Jumbotron className="bg-dark text-white">
            <center><h1>CUSTOMER</h1>

                </center>
            </Jumbotron>
            <Card className={"border border-dark bg-dark text-white"}>

            <Card.Body>
            <Table bordered hover striped variant="dark">
            <thead>
              <tr >
                <th>#</th>
                <th>FIRST NAME</th>
                <th>LAST NAME </th>
                <th> ADDRESS </th>
                <th> CUSTOMER ID </th> 
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
            {
                                  this.state.gets.length === 0 ?
                                  <tr align="center">
                                    <td colSpan="6">No Customers Available.</td>
                                  </tr> :
                                  this.state.gets.map((get) => (
                                  <tr key={get.id}>
                                  <td>
                                      {get.id}
                                  </td>
                                  <td>
                                      {get.firstname}
                                  </td>
                                      <td>
                                          {get.lastname}
                                      </td>
                                      <td>{get.address}</td>
                                      <td>
                                      {get.customerId}
                                  </td>

                                      <td>
                                          <ButtonGroup>

                                              <Button size="sm" variant="outline-danger" onClick={this.deleteProd.bind(this, get.id)}><Glyphicon glyph='trash' /></Button>
                                          </ButtonGroup>
                                      </td>
                                  </tr>
                                  ))
            }

            </tbody>
          </Table>
          </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>




    )
  }
}
export default cget
