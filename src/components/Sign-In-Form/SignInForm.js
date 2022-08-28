import { useState } from 'react';

import FormInput from '../Form-Input/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../../ui/button/Button';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase';

import './SignInForm.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with his email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
        <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
