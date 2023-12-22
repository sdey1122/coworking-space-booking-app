import React, { useState } from "react";
import { Form, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("/api/users/register", values);
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.response.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-heading">Register</h2>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Name" name="name" placeholder="Enter your name">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Email" name="email" placeholder="Enter your email">
            <input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            placeholder="Enter your password"
          >
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
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
          >
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
          <button className="primary-btn" type="submit">
            Register
          </button>
          <p style={{ textAlign: "center" }}>
            <br />
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Register;
