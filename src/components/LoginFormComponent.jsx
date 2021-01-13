import React, {useState, useEffect} from 'react';
import './loginform.css';

function LoginForm(){
    const [fromData, setFormData] = useState({email: '', pwd: '', rememberMe: false, submitted: false});
    return (
      <div className="login__form__container">
        <form className="login__form">
          <h1>Sign in</h1>
          <p>
            <label for="mail">
              <b>Email</b>
            </label>
            <input className="fields" type="email" id="mail" name="usermail" />
          </p>
          <p>
            <label for="pwd">
              <b>Password</b>
            </label>
            <input
              className="fields"
              type="password"
              id="pwd"
              name="password"
            />
          </p>
          <p>
            <input type="checkbox" id="rem" name="rem" value="rem" />
            <label for="rem"> Remember me?</label>
          </p>
          <p>
            <button className="btn">
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