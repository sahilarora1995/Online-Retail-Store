import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  {Card,Navbar,Nav,Container,Row,Jumbotron,Col,Table,ButtonGroup,Button} from 'react-bootstrap'
import Glyphicon from '@strongdm/glyphicon'
//import {faList} from '@fontawesome/free-solid=svg-icon'
import Toast from 'light-toast';
class cart extends Component{

constructor(props)
{
  super(props)

  this.state={
    gets:[]
  }
}


componentDidMount(){
  const id= JSON.parse(localStorage.getItem('id'))
  axios.get('http://localhost:8000/customer/'+ id + '/',{"Access-Control-Allow-Origin": "*"})
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
  s= s+ (el["ProductId"].toString())+","
});
s=s.substring(0, s.length - 1);
function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}
var r=remove_first_occurrence(s,itemId.toString()+',')
console.log(r)
 const prod={
  "cart" : r
 }
 axios.patch("http://localhost:8000/customer/"+ id + '/' ,prod, {
headers: {
    'Content-Type': 'application/json'
}})

.then(response=>{
      Toast.info('Successfully Deleted.. Click Ok to continue!', 4000, () => {
        alert("OKAY!")
        window.location.reload();
        // do something after the toast disappears
        this.setState(this.initialState)
      });
      //alert('Selected Product has been Deleted')
     // this.setState(this.initialState)
})
.catch(error=>{
    alert('Enter Valid Inputs')
  console.log( error.response.request._response )
})

})
  .catch(error=>{
  
    console.log(error)
  })

//console.log(s)   
 
 
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
                <th>Customer ID</th>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Delete</th>

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
                                      {JSON.parse(localStorage.getItem('id'))}
                                  </td>
                                      <td>
                                          {get.ProductName}
                                      </td>
                                      <td>{get.ProductId}</td>
                                      

                                      <td>
                                          <ButtonGroup>

                                              <Button size="sm" variant="outline-danger" onClick={this.deleteProd.bind(this, get.ProductId)}><Glyphicon glyph='trash' /></Button>
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
export default cart
