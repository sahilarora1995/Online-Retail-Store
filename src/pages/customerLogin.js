import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  {Navbar,Nav,Container,Row,Jumbotron,Col} from 'react-bootstrap'
import cproduct from './cproduct';

class customerLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
   
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        if(this.state.value!= '')
        {
            localStorage.setItem('id',JSON.stringify(this.state.value));
          this.props.history.push('/cproduct');
        }
        else if (this.state.value!='admin123') {
            alert("WRONG PASSWORD, TRY AGAIN !!")
          this.props.history.push('/customerLogin');
        }
        event.preventDefault();
      }
  

    render() {
      const marginTop={
        marginTop:"20px",
        alignItems:"center"
      }
     

        return (
            
           
          <center>
          <Container >
             
            <Row>
              <Col lg={12} style={marginTop}>
            
                <Jumbotron className="bg-dark text-white">
                <h1>LOGIN</h1>

                </Jumbotron>

                <div className="FormCenter" >
                    <form onSubmit={this.handleSubmit} className="FormFields">
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">CUSTOMER LOGIN</label>

                        <input type="text" className="FormField__Input" placeholder="EMAIL-ID"  value={this.state.value} onChange={this.handleChange}/>
                        <input type="text" className="FormField__Input" placeholder="PASSWORD" name="password"  />                        
                        
                      </div>
                
                      <div className="FormField">
                      <input type="submit" className="FormField__Button mr-20" value="Submit" />
                      </div>
                    </form>
                  </div>
              </Col>
            </Row>
          </Container>
          </center>







        );
    }
}

export default customerLogin;