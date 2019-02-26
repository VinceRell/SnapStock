import React, { Component } from 'react';
import { withFirebase } from '../../../components/Firebase';
import { updatedObject } from '../../../shared/utility';
import classes from '../../../assets/css/Auth.module.scss';

// component imports
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';


class SignIn extends Component {

  state = {
    signInForm: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'E-mail adres'
        },
        value: ''
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Wachtwoord'
        },
        value: ''
      }
    },
    error: null
  }

  onSubmit = event => {
    event.preventDefault();
    const { signInForm } = this.state;
    const email = signInForm.email.value;
    const password = signInForm.password.value;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });

  };

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedForm = updatedObject(this.state.signInForm, {
      [inputIdentifier]: updatedObject(this.state.signInForm[inputIdentifier], {
        value: event.target.value
      })
    })

    this.setState({ signInForm: updatedForm });
  };

  render() {
    const { signInForm, error } = this.state;

    // create an array of objects with the input element as key
    const formElementArray = [];
      for (let key in signInForm) {
        formElementArray.push({
          id: key,
          config: signInForm[key]
        });
    }

    const isInvalid = signInForm.password.value === '' || signInForm.email.value === '';

    return (
      <section className={classes.auth}>
      <div className={classes.auth__container}>
        <h1 className={classes.auth__title}>Inloggen</h1>
        <form onSubmit={this.onSubmit}>
          {formElementArray.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={(event) => this.inputChangeHandler(event, formElement.id)} />
          ))}

          <Button isDisabled={isInvalid} btnStyles={"btn btn_cta"}>
            Inloggen
          </Button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    </section>
    );
  }
}

export default withFirebase(SignIn);