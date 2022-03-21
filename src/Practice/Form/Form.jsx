import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userName: "",
        email: "",
        /*   password:'' */
      },
      type: "password",
    };
  }

  formHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /*  userNameHandler=(event)=>{
    this.setState({userName:event.target.value})
  }
  emailHandler=(event)=>{
    this.setState({email:event.target.value})
  }
  passwordHandler=(event)=>{
    this.setState({password:event.target.value})
  } */
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="container mt-12">
          <div className="row">
            <div className="col md-4">
              <div className="card">
                <div className="card-header"> {/* {JSON.stringify(this.state)} */}
                </div> *
                <div className="card-body">
                  <form onClick={this.submitHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                        name="userName"
                        onChange={this.formHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="user Email"
                        name="email"
                        onChange={this.formHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type={this.state.type}
                        className="form-control"
                        placeholder="user password"
                        name="password"
                        onChange={this.formHandler}
                      />
                      <a href="/">
                        <i
                          className="fa fa-eye-slash"
                          aria-hidden="true"
                          d
                          onClick={() => {
                            // this.setState({ type: "text" });
                            this.setState(this.state.type==="password"?{ type: "text" }:{ type: "password" });
                          }}
                        >
                          {" "}
                        </i>
                      </a>
                    </div>
                    {/*  <div className="form-group">
                      <div className="input-type" id='show-hiden-group'>
                        <input className='form-control'type={this.state.type}/>
                        <div className='input-group-addon'>
                        <a href='/'>
                      <i className="fa fa-eye-slash" aria-hidden="true" onClick={()=>{this.setState({type:"text"})}}></i></a></div>
                        
                        </div>
                      </div> */}
                    <div className="form-group">
                      <input
                        type="submit"
                        className="form-control btn btn-success"
                        value="login"
                        onClick={this.submitHandler}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
