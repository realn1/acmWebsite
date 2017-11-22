/**
*
* LoginField
*
*/

import React, { PropTypes } from 'react';


class LoginField extends React.Component { // eslint-disable-line react/prefer-stateless-function

  getTheUsername(evt) {
    evt.preventDefault();
    const user = document.getElementById('username').value;
    return user;
  }

  getThePassword(evt) {
    evt.preventDefault();
    const pass = document.getElementById('password').value;
    return pass;
  }

  render() {
    return (
      <div>
        <form onSubmit={(evt) => this.props.submit(evt)}>
          <input type="text" id="username" name="username"></input>
          <input type="password" id="password" name="password"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

LoginField.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginField;
