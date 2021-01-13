import React, {useState} from 'react';
import {sendLoginData} from '../services/gatewayService';
import './loginform.css';

function LoginForm(){
    const [formData, setFormData] = useState({email: '', pwd: '', rememberMe: false, submitted: false, error: false});
    const [emailError, setEmailError] = useState(null);
    const [pwdError, setPwdError] = useState(null);

    const validate = (formData) => {
      if(!formData.email){
        setEmailError('Email cannot be left empty!');
        setFormData({...formData, error: true});
      }else if(!validateEmail(formData.email)){
        setEmailError('Please enter a valid email address!');
        setFormData({...formData, error: true});
      }else if(!formData.pwd){
        setPwdError('Please set a secure password with alphamumeric & a special character!');
        setFormData({...formData, error: true});
      }else if(!validatePwd(formData.pwd)){
        setPwdError('Please set a password with alphamumeric & a special character!');
        setFormData({...formData, error: true});
      }else{
        return true;
      }
    }

    const validateEmail = (email) => {
        let re = /\S+@\S+\.\S+/;
        return re.test(email.toLowerCase());
    }

    const validatePwd = (pwd) => {
      const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"); 
      if(mediumRegex.test(pwd)) {
        return true;
      } else {
        return false;
      }
    }

    const handleSubmit = () => {
      setFormData({...formData, submitted: true});
      if(validate(formData)){
        sendLoginData(formData);
      }
    }

    return (
      <div className="login__form__container">
        <form className="login__form" noValidate>
          <h1>Sign in</h1>
          <p>
            <label for="mail">
              <b>Email</b>
            </label>
            <input 
              className={`fields ${emailError ? 'error' : ''}`} 
              type="email" id="mail" 
              name="usermail" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              onBlur={() => setEmailError('')}
              />
            {formData.error && emailError && <span className="error__msg">{emailError}</span>}
          </p>
          <p>
            <label for="pwd">
              <b>Password</b>
            </label>
            <input
              className={`fields ${pwdError ? 'error' : ''}`}
              type="password"
              id="pwd"
              name="password"
              value={formData.pwd}
              onChange={(e) => setFormData({...formData, pwd: e.target.value})}
              onBlur={() => setPwdError('')}
            />
            {formData.error && pwdError && <span className="error__msg">{pwdError}</span>}
          </p>
          <p>
            <input type="checkbox" id="rem" name="rem" value="rem" checked={formData.rememberMe} onChange={() => setFormData({...formData, rememberMe: !formData.rememberMe})}/>
            <label for="rem">Remember me?</label>
          </p>
          <p>
            <button type="button" className="btn" onClick={handleSubmit}>
              <b>Sign in</b>
            </button>
          </p>
          <section>
              <p>
                <a href="#">Forgot your password?</a>
              </p>
              <p>
                Dont have an account? <a href="#">Sign up</a>
              </p>
              <p>
                <a href="#">Resend email confirmation</a>
              </p>
            </section>   
        </form>
      </div>
    );
}

export default LoginForm;