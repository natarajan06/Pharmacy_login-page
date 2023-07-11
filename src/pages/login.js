import React, { useState } from "react";
import "../pages/login.css";

function Login() {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    setUsernameError("");
    setPasswordError("");

    if (!/^[a-zA-Z]+$/.test(username)|| username !=="admin") {
      setUsernameError("Invalid username ");
    }

    if (password !== "password") {
      setPasswordError("Invalid password");
    }

    if (!/^[a-zA-Z]+$/.test(username) || password !== "password") {
      return;
    }
  };

  return (
    <div>
      <div className="login-wrap">
        <div className="login-html">
          <h1 className="s">PHARMACY</h1>
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Login
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab"></label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input id="user" type="text" className="input" />
                {usernameError && (
                  <div className="error-message">{usernameError}</div>
                )}
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
                {passwordError && (
                  <div className="error-message">{passwordError}</div>
                )}
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Login"
                  onClick={handleLogin}
                />
              </div>
              <div className="hr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
