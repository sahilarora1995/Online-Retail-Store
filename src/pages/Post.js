import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  {Navbar,Nav,Container,Row,Jumbotron,Col} from 'react-bootstrap'

class Post extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            price: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


 initialState={
   name:'', price:''
 }
  handleChange(e) {
          let target = e.target;
          let value = target.type === 'checkbox' ? target.checked : target.value;
          let name = target.name;

          this.setState({
            [name]: value
          });
      }
      handleSubmit = e => {

        e.preventDefault()

        const prod={
          name:this.state.name,
          price:this.state.price
        };
        console.log(prod)
        axios.post("http://localhost:8080/products",prod, {
        headers: {
            'Content-Type': 'application/json'
        }})

        .then(response=>{

              this.setState(this.initialState)
        })
        .catch(error=>{
            alert('Enter Valid Inputs')
          console.log( error.response.request._response )
        })


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
                <h1>Add Product</h1>

                </Jumbotron>

                <div className="FormCenter" >
                    <form onSubmit={this.handleSubmit} className="FormFields">
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Product Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter Product Name" name="name" value={this.state.name} onChange={this.handleChange} required/>
                      </div>
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="price">Price</label>
                        <input type="text" id="price" className="FormField__Input" placeholder="Enter Price" name="price" value={this.state.price} onChange={this.handleChange} required/>
                      </div>
                      <div className="FormField">
                          <button className="FormField__Button mr-20">Submit</button>
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

export default Post;
