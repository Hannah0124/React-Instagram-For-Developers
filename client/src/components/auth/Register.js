import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames';

class Register extends Component {
  constructor() {
    // Call parent
    super();
    // Create a state object 
    this.state = {
      email: '',
      fullName: '',
      userName: '',
      password: '',
      password2: '',
      errors: {}
    };

    // Give alias
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    // Change state
    // setState(stateToChange, newValueToCome)
    // console.log('this? ',this); // => Register
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();

    // Create a new user object
    const newUser = {
      // Read data from the local state
      email: this.state.email,
      fullName: this.state.fullName,
      userName: this.state.userName,
      password: this.state.password,
      password2: this.state.password2
    };

    // Ready to fire my API
    // Call axios.post('the path of my API, newUser)
    axios
      .post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({errors: err.response.data}));
  }

  render() {
    const {errors} = this.state;
    return (
      <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your Instagram account</p>
            <form onSubmit={this.onSubmit} noValidate>
              <div className="form-group">
                <small className="form-text text-muted">*This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                <input type="email" className={classnames('form-control form-control-lg', {'is-invalid':errors.email})} placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} required />
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="form-group">
                <input type="text" className={classnames('form-control form-control-lg', {'is-invalid':errors.fullName})} placeholder="Full Name" name="fullName" value={this.state.fullName} onChange={this.onChange} />
                {errors.fullName && (
                  <div className="invalid-feedback">
                    {errors.fullName}
                  </div>
                )}
              </div>

              <div className="form-group">
                <input type="text" className={classnames('form-control form-control-lg', {'is-invalid':errors.userName})} placeholder="Username" name="userName" value={this.state.userName} onChange={this.onChange} required />
                {errors.userName && (
                  <div className="invalid-feedback">
                    {errors.userName}
                  </div>
                )}
              </div>

              <div className="form-group">
                <input type="password" className={classnames('form-control form-control-lg', {'is-invalid':errors.password})} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password}
                  </div>
                )}
              </div>

              <div className="form-group">
                <input type="password" className={classnames('form-control form-control-lg', {'is-invalid':errors.password2})} placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange} />
                {errors.password2 && (
                  <div className="invalid-feedback">
                    {errors.password2}
                  </div>
                )}
              </div> 

              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Register;