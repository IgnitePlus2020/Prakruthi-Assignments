import React from 'react';
import '../App.css';



class Form extends React.Component {

  constructor(props){
    super(props)
    this.state={
      fname:'',
      lname:'',
      email:'',
      phone:'',
      address:'',
    
    }
  }
  handleSubmit = (event) =>{event.preventDefault()
    this.setState({
      showFname:true,
      showLname:true,
      showEmail:true,
      showPhone:true,
      showAddress:true
    });

  }

  handleFname =(event) => {
    event.preventDefault()
    this.setState({fname:event.target.value})
  }
  handleLname =(event) => {
    event.preventDefault()
    this.setState({lname:event.target.value})
  }
  handleEmail =(event) => {
    event.preventDefault()
    this.setState({email:event.target.value})
  }
  handlePhone =(event) => {
    event.preventDefault()
    this.setState({phone:event.target.value})
  }
  handleAddress =(event) => {
    event.preventDefault()
    this.setState({address:event.target.value})
  }


  render() {
    return(
   <div>
     <h1 className='centered'>CUSTOMER DETAILS</h1>
        <div className="centered">
        <form onSubmit={this.handleSubmit}>
          <p><input type="text" placeholder = "First Name" name ="fname" onChange={this.handleFname} required/></p>
          <p><input type="text" placeholder = "Last Name" name ="lname" onChange={this.handleLname} /></p>
          <p><input type="text" placeholder = "Email" name ="email" onChange={this.handleEmail} required/></p>
          <p><input type="text" placeholder = "Phone Number" name ="phone" onChange={this.handlePhone} required/></p>
          <p><input type="text" placeholder = "Address" name="pin" onChange={this.handleAddress} required/></p>
    <p><button type="submit" onClick={this.handleSubmit} id="Go" class="dropbtn">Submit</button>
          {this.state.showFname && <p>First Name: {this.state.fname}</p>}
          {this.state.showLname && <p>Last Name: {this.state.lname}</p>}
          {this.state.showEmail && <p>Email: {this.state.email}</p>}
          {this.state.showPhone && <p>Phone Number: {this.state.phone}</p>}
          {this.state.showAddress && <p>Address: {this.state.address}</p>}</p>
        </form>
      </div>
    </div>
    )
  }
}

export default Form
