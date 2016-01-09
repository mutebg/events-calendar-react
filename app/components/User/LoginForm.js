import React from 'react';
import './LoginForm.scss';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
  }

  handleForm() {

  }

  render() {
    return (
      <form className="form login-form">
        <div className="form__group">
          <label className="form__label">E-mail</label>
          <input type="email" className="form__input" ref="email" placeholder="E-mail"/>
        </div>
        <div className="form__group">
          <label className="form__label">Password</label>
          <input type="password" className="form__input" ref="password" placeholder="Password"/>
        </div>
        <div className="form__group">
          <button className="form__button" type="button" onClick={this.handleForm.bind(this)}>LogIn</button>
        </div>
      </form>
    );
  }
}
