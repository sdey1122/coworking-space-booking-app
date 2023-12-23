import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { SetUser } from "../redux/usersSlice";

function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const validateToken = async () => {
      try {
        const response = await axios.post(
          "/api/users/get-user-by-id",
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data.success) {
          dispatch(SetUser(response.data.data));
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        localStorage.removeItem("token");
        message.error(error.message || "Authentication failed");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, [navigate, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
