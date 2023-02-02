import React, { useState } from "react";
import "./CreateAccount.css";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="create-account">
      <h2 className="create-account-header">Create an Account</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="create-account-submit-button">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
