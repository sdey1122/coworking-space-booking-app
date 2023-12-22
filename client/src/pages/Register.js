import React, { useState } from "react";
import { Form, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validatePassword = (rule, value, callback) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    if (value && !passwordRegex.test(value)) {
      callback(
        "Password must be 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter, and 1 symbol."
      );
    } else {
      callback();
    }
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/users/register", values);
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      const backendMessage = error.response.data.message;
      message.error(backendMessage);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-heading">Register</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              {
                min: 3,
                max: 50,
                message: "Name should be between 3 and 50 characters",
              },
            ]}
          >
            <input type="text" placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              {
                type: "email",
                message: "Invalid email address",
              },
            ]}
          >
            <input type="email" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
              {
                validator: validatePassword,
              },
            ]}
          >
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <button
                onClick={togglePasswordVisibility}
                type="button"
                className="toggle-password"
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </button>
            </div>
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match")
                  );
                },
              }),
            ]}
          >
            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
              />
              <button
                onClick={toggleConfirmPasswordVisibility}
                type="button"
                className="toggle-password"
              >
                {showConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
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
