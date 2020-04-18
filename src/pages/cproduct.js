import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  {Navbar,Nav,Container,Row,Jumbotron,Col} from 'react-bootstrap'

class cproduct extends Component {
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

   handleClick() { console.log(JSON.parse(localStorage.getItem('id'))); this.props.history.push('/allproducts');  } 
   handleClickp() { this.props.history.push('/cart'); console.log('this is:', this); }

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
                <h1>PRODUCT DEPARTMENT</h1>

                </Jumbotron>

                <div className="FormCenter" >
                    <form onSubmit={this.handleSubmit} className="FormFields">
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">CUSTOMER OR pRODUCT?</label>
              
                    
                      </div>
                        
                      <div className="FormField">
                  
                   <input  className="FormField__Button mr-20"  type="submit" value="ALL PRODUCTS"  onClick={() => this.handleClick()} /> 
                   <input  className="FormField__Button mr-20"  type="submit" value="MY CART PRODUCTS"  onClick={() => this.handleClickp()} />
    
              
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

export default cproduct;