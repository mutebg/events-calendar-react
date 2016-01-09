import React from 'react';


export default class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
  }

  handleForm(e) {

  }

  render() {
    return (
      <form className="form">
        <div className="form__group">
          <label className="form__label">E-mail</label>
          <input type="text" ref="email" className="form__input" placeholder="E-mail"/>
        </div>
        <div className="form__group">
          <label className="form__label">Password</label>
          <input type="text" ref="password" className="form__input" placeholder="Password"/>
        </div>
        <div className="form__group">
          <button className="form__button" type="button" onClick={this.handleForm.bind(this)}>LogIn</button>
        </div>
      </form>
    );
  }
}
