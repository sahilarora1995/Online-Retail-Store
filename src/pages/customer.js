import React from 'react';
import  {Navbar,Nav,Container,Row,Jumbotron,Col} from 'react-bootstrap'
import Glyphicon from '@strongdm/glyphicon'
class customer extends React.Component{

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
          <center><h1>Customer Management System</h1>
              
              <Nav.Link className="text-white" href="/cget"><Glyphicon glyph='eye-open' /> Get Customer</Nav.Link>
              <Nav.Link className="text-white" href="/cpost"><Glyphicon glyph='plus'/> Add Customer</Nav.Link>
              <Nav.Link className="text-white" href="#"><Glyphicon glyph='edit'/> Modify Customer</Nav.Link>
              </center>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

}
export default customer;
