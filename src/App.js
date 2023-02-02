import React, { useState } from "react";
import "./FormValidation.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateAccount from "./CreateAccount";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }

    setErrors(errors);
  };

  return (
    <Router>
      <div className="form-validation">
        <h2 className="form-validation-header">Sign in</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleSubmit}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </label>
          <div className="form-validation-button-container">
            <button type="submit" className="form-validation-submit-button">
              Sign in
            </button>
            <Link to="/create-account">
              <button className="form-validation-create-account-button">
                Create an account
              </button>
            </Link>
          </div>
        </form>
        <Route path="/create-account" component={CreateAccount} />
      </div>
    </Router>
  );
};

export default FormValidation;
