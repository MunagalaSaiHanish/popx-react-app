import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen">
      <div className="form-container">
        <h1>Signin to your <br></br>PopX account</h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/profile")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
