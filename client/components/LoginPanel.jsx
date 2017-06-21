import React from 'react';

export default class LoginPanel extends React.Component {
  render() {
    return (
        <div className='login-panel'>
          <form>
            <h2> Log In </h2>
            <div className='row-input'>
              <input type='text' placeholder='Username'/>
            </div>
            <div className='row-input'>
              <input type='password' placeholder='Password'/>
            </div>
            <div className='row-input'>
              <input type='submit' value="Login"/>
            </div>
          </form>
        </div>
    );
  }
}
