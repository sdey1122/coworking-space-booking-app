import React, { useState } from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-heading">Login</h2>
        <Form layout="vertical" onFinish={handleSubmit}>
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
          <button className="primary-btn" type="submit">
            Login
          </button>
          <p style={{ textAlign: "center" }}>
            <br />
            Dont have an account? <Link to="/register">Register</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
