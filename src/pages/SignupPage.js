import React from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen">

      <div className="form-container signup-form">

        <h1>Create your <br></br>PopX account</h1>

        <div className="input-group">
          <label>
            Full Name<span className="required">*</span>
          </label>

          <input
            type="text"
            placeholder="Marry Doe"
          />
        </div>

        <div className="input-group">
          <label>
            Phone number<span className="required">*</span>
          </label>

          <input
            type="text"
            placeholder="Marry Doe"
          />
        </div>

        <div className="input-group">
          <label>
            Email address<span className="required">*</span>
          </label>

          <input
            type="email"
            placeholder="Marry Doe"
          />
        </div>

        <div className="input-group">
          <label>
            Password <span className="required">*</span>
          </label>

          <input
            type="password"
            placeholder="Marry Doe"
          />
        </div>

        <div className="input-group">
          <label>
            Company name
          </label>

          <input
            type="text"
            placeholder="Marry Doe"
          />
        </div>

        <div className="radio-group">

          <p>
            Are you an Agency?
            <span className="required">*</span>
          </p>

          <div className="radio-buttons">

            <label>
              <input
                type="radio"
                name="agency"
                defaultChecked
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
              />
              No
            </label>

          </div>
        </div>

        <button
          className="primary-btn create-btn"
          onClick={() => navigate("/profile")}
        >
          Create Account
        </button>

      </div>

    </div>
  );
}

export default SignupPage;