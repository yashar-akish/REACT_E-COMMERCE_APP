import SignUpForm from '../../components/Sign-Up-Form/SignUpForm';
import SignInForm from '../../components/Sign-In-Form/SignInForm';

import './Authentication.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
