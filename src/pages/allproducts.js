import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  {Card,Navbar,Nav,Container,Row,Jumbotron,Col,Table,ButtonGroup,Button} from 'react-bootstrap'
import Glyphicon from '@strongdm/glyphicon'
//import {faList} from '@fontawesome/free-solid=svg-icon'
class allproducts extends Component{

constructor(props)
{
  super(props)

  this.state={
    gets:[],
    getc:[]
  }
}


componentDidMount(){

  const id= console.log(JSON.parse(localStorage.getItem('id')))
  axios.get('http://localhost:8080/product/',{"Access-Control-Allow-Origin": "*"})
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
        var s=''
    console.log(itemId)
  const id= JSON.parse(localStorage.getItem('id'))
  axios.get('http://localhost:8000/customer/'+ id + '/',{"Access-Control-Allow-Origin": "*"})
  .then(response =>{
  
  this.setState({
    getc:response.data
  })
 response.data.forEach(el => {
 // console.log(typeof(el["ProductId"].toString()))
  s= s+ (el["ProductId"].toString())+","
});
s=s+itemId
//console.log(s)
  })
  .catch(error=>{
  
    console.log(error)
  })

console.log(s)   
  const prod={
  "cart" : "12,13,14,15"
};
  axios.patch("http://localhost:8000/customer/"+ id + '/' ,prod, {
headers: {
    'Content-Type': 'application/json'
}})

.then(response=>{
      alert('Successfully Saved!')
      this.setState(this.initialState)
})
.catch(error=>{
    alert('Enter Valid Inputs')
  console.log( error.response.request._response )
})

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
            <center><h1>Products</h1>

                </center>
            </Jumbotron>
            <Card className={"border border-dark bg-dark text-white"}>

            <Card.Body>
            <Table bordered hover striped variant="dark">
            <thead>
              <tr >
                <th>#</th>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Add to Cart</th>

              </tr>
            </thead>
            <tbody>
            {
                                  this.state.gets.length === 0 ?
                                  <tr align="center">
                                    <td colSpan="6">No Products Available.</td>
                                  </tr> :
                                  this.state.gets.map((get) => (
                                  <tr key={get.id}>
                                  <td>
                                      {get.id}
                                  </td>
                                      <td>
                                          {get.productname}
                                      </td>
                                      <td>{get.productId}</td>

                                      <td>
                                          <ButtonGroup>

                                              <Button  size="lg" className="mb-2" onClick={this.deleteProd.bind(this, get.id)}><Glyphicon glyph='shopping-cart' /></Button>
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
export default allproducts
