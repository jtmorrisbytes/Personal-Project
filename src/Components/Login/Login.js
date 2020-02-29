import React, { Component } from 'react';
import './Login.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  updateState,
  loginUser,
  getUser
} from '../../redux/reducers/authReducer';

class Login extends Component {
  handleChange = e => {
    this.props.updateState({ [e.target.name]: e.target.value });
  };

  handleClickLogin = () => {
    this.props
      .loginUser(this.props.user_email, this.props.password)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    //bring in user_id from the getSession call and store it in redux. Once we have that user_id
    //we can bring it in to the login component and write an if statement to see if user_id exists on session.
    //if it does, we will use <Redirect> to home from react-router-dom to redirect to the correct page.
    console.log(this.props.user);
    if (this.props.user.user_id) {
      return <Redirect to='/home' />;
    }
    return (
      <section>
        <div className='primary-login'>
          <h1>Member Login</h1>
          <i class='fas fa-user'></i>
          <section className='info-box'>
            <input
              type='text'
              name='user_email'
              placeholder='Enter your email address'
              onChange={this.handleChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Enter Password'
              onChange={this.handleChange}
            />
            <button onClick={this.handleClickLogin}>Log in</button>
            <div className='new-user'>
              <h6>New User?</h6>
              <Link to='/Register'>
                <h6 className='sml-act'>create an account</h6>
              </Link>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user_email: state.authReducer.user_email,
    first_name: state.authReducer.first_name,
    password: state.authReducer.password,
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps, {
  updateState,
  loginUser,
  getUser
})(Login);
