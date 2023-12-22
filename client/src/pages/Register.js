import React, { useState } from "react";
import { Form } from "antd";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-heading">Register</h2>
        <Form layout="vertical">
          <Form.Item label="Name">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Email">
            <input type="email" />
          </Form.Item>
          <Form.Item label="Password">
            <div className="password-container">
              <input type={showPassword ? "text" : "password"} />
              <button
                onClick={togglePasswordVisibility}
                type="button"
                className="toggle-password"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </Form.Item>
          <Form.Item label="Confirm Password">
            <div className="password-container">
              <input type={showConfirmPassword ? "text" : "password"} />
              <button
                onClick={toggleConfirmPasswordVisibility}
                type="button"
                className="toggle-password"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
