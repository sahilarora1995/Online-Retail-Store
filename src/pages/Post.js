import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  {Navbar,Nav,Container,Row,Jumbotron,Col} from 'react-bootstrap'



class Post extends Component {
  constructor() {
    super();

    this.state = {
      productname: '',
      productId: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}


initialState={
  productname: '',
  productId: '',
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
  productname:this.state.productname,
  productId: Number(this.state.productId),
};
console.log(prod)
axios.post("http://localhost:8000/product/",prod, {
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
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter Product Name" name="productname" value={this.state.productname} onChange={this.handleChange} required/>
                      </div>
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="price">product Id</label>
                        <input type="text" id="price" className="FormField__Input" placeholder="Enter Product ID" name="productId" value={this.state.productId} onChange={this.handleChange} required/>
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
