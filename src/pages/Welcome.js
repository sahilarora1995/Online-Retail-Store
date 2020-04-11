import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  {Navbar,Nav,Container,Row,Jumbotron,Col} from 'react-bootstrap'

class Welcome extends Component {
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
    if(this.state.value== 'c')
    {
      this.props.history.push('/customer');
    }
    else if (this.state.value=='p') {
      this.props.history.push('/login');
    }
    event.preventDefault();
  }
  
    onSubmit = () => {
          this.props.history.push('/Post');
      
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
                <h1>ONLINE RETAIL STORE</h1>

                </Jumbotron>

                <div className="FormCenter" >
                    <form onSubmit={this.handleSubmit} className="FormFields">
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">CUSTOMER OR pRODUCT?</label>
                        <input type="text"  placeholder="Customer or Product [ C/P ]" className="FormField__Input" value={this.state.value} onChange={this.handleChange} required/>
                    
                      </div>
        
                      <div className="FormField">
                      <input  className="FormField__Button mr-20"  type="submit" value="Submit" />
    
              
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

export default Welcome;