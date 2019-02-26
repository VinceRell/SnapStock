import React, { Component } from 'react';
import { withFirebase } from '../../../components/Firebase';
import { updatedObject } from '../../../shared/utility';
import classes from '../../../assets/css/Auth.module.scss';

// component imports
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class SignUp extends Component {

  state = {
    signUpForm: {
      username: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Gebruikersnaam'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'E-mail adres'
        },
        value: ''
      },
      passwordOne: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Wachtwoord'
        },
        value: ''
      },
      passwordTwo: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Wachtwoord bevestigen'
        },
        value: ''
      }
    },
    error: null
  }

  onSubmit = event => {
    event.preventDefault();
    const { signUpForm } = this.state;
    const email = signUpForm.email.value;
    const password = signUpForm.passwordOne.value;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() =>{
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedForm = updatedObject(this.state.signUpForm, {
      [inputIdentifier]: updatedObject(this.state.signUpForm[inputIdentifier], {
        value: event.target.value
      })
    })

    this.setState({ signUpForm: updatedForm });
  };

  render() {
    const { signUpForm, error } = this.state;

    // create an array of objects with the input element as key
    const formElementArray = [];
    for (let key in signUpForm) {
      formElementArray.push({
        id: key,
        config: signUpForm[key]
      });
    }

    const isInvalid =
      signUpForm.passwordOne.value !== signUpForm.passwordTwo.value ||
      signUpForm.passwordOne.value === '' ||
      signUpForm.email.value === '' ||
      signUpForm.username.value === '';

    return (
      <section className={classes.auth}>
        <div className={classes.auth__container}>
          <h1 className={classes.auth__title}>Aanmelden</h1>
          <form onSubmit={this.onSubmit}>
            {formElementArray.map(formElement => (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) => this.inputChangeHandler(event, formElement.id)} />
            ))}

            <Button isDisabled={isInvalid} btnStyles={"btn btn--cta"}>
              Aanmelden
            </Button>
            {error && <p>{error.message}</p>}
          </form>
        </div>
      </section>
    );
  }
}

export default withFirebase(SignUp);