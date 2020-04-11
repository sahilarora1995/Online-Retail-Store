import React from 'react';
import  {Navbar,Nav,Container,Row,Jumbotron,Col} from 'react-bootstrap'
import Glyphicon from '@strongdm/glyphicon'
class product extends React.Component{

render(){
  const marginTop={
    marginTop:"20px",
    alignItems:"center"
  }
  return(
    <Container>
      <Row>
        <Col lg={12} style={marginTop}>
          <Jumbotron className="bg-dark text-white">
          <center><h1>Product Management System</h1>
              
          <Nav.Link className="text-white" href="/get"><Glyphicon glyph='eye-open' />  View Products</Nav.Link>
              <Nav.Link className="text-white" href="/Post"><Glyphicon glyph='plus'/> Add Product</Nav.Link>
              <Nav.Link className="text-white" href="#"><Glyphicon glyph='edit'/> Modify Product</Nav.Link>
              </center>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

}
export default product;
