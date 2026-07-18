import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        await axios.get("http://localhost:3000/api/me", {
          withCredentials: true,
        });

        setIsLoggedIn(true);

      } catch (error) {

        setIsLoggedIn(false);

      } finally {

        setLoading(false);

      }
    };

    checkUser();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;