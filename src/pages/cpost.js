import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  {Navbar,Nav,Container,Row,Jumbotron,Col} from 'react-bootstrap'

class cpost extends Component {
    constructor() {
        super();

        this.state = {
            firstname: '',
            lastname: '',
            address:'',
            customerId: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


 initialState={
  firstname: '',
  lastname: '',
  address:'',
  customerId: '',
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
  firstname:this.state.firstname,
  lastname: this.state.lastname,
  address: this.state.address,
  customerId: Number(this.state.customerId),
};
console.log(prod)
axios.post("http://localhost:8080/customer/",prod, {
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
                        <label className="FormField__Label" htmlFor="name">First Name</label>
                        <input type="text" id="firstname" className="FormField__Input" placeholder="Enter First Name" name="firstname" value={this.state.firstname} onChange={this.handleChange} required/>
                      </div>
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="price">Last Name</label>
                        <input type="text" id="lastname" className="FormField__Input" placeholder="Enter Last Name " name="lastname" value={this.state.lastname} onChange={this.handleChange} required/>
                      </div>
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="price">Address</label>
                        <input type="text" id="Address" className="FormField__Input" placeholder="Enter Address " name="address" value={this.state.address} onChange={this.handleChange} required/>
                      </div>
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="price">CustomerID</label>
                        <input type="text" id="customerId" className="FormField__Input" placeholder="Enter customerID " name="customerId" value={this.state.customerId} onChange={this.handleChange} required/>
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

export default cpost;