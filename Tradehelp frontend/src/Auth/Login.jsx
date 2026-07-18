import "../style/Login.css";
import CursorGrid from "../Reactbits/CursorGrid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

  if (!formData.email || !formData.password) {
    alert("Please fill all fields");
    return;
  }

  try {

    const response = await axios.post(
      "http://localhost:3000/api/Login",
      {
        email: formData.email,
        password: formData.password,
      },
      {
        withCredentials: true,
      }
    );

    alert(response.data.message);

    navigate("/Dashboard", { replace: true });

  } catch (error) {

    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Something went wrong");
    }

  }
};

  return (
    <>
      {/* Background */}
      <div className="cursor-grid-bg">
        <CursorGrid
          cellSize={70}
          color="#8B5CF6"
          radius={140}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1.2}
          maxOpacity={1}
          fillOpacity={0}
          gridOpacity={0}
          cellRadius={0}
          clickPulse
          pulseSpeed={600}
        />
      </div>

      <main className="login-main">
        {/* LEFT SIDE */}
        <section className="login-left">
          <div className="login-card">
            <h2>Welcome Back</h2>

            <p className="card-text">
              Sign in to continue your demo trading journey.
            </p>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" />
                Remember Me
              </label>

              <a href="#">Forgot Password?</a>
            </div>

            <button onClick={handleSubmit} className="login-btn">Login</button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button className="google-btn">Continue with Google</button>

            <p className="signup-link">
              Don't have an account?
              <span onClick={() => {navigate("/signup");}}>
                Create Demo Account
              </span>
            </p>
          </div>
        </section>

        {/* RIGHT SIDE */}

        <section className="login-right">
          <h1>Welcome to TradeHelp</h1>

          <h3>Continue Your Journey</h3>

          <p>
            Practice with confidence in a realistic demo trading environment.
            Improve your skills before entering live markets.
          </p>

          <div className="feature-box">
            <div className="feature">
              <h4>📈 Realistic Trading</h4>

              <p>Experience real market conditions with virtual funds.</p>
            </div>

            <div className="feature">
              <h4>🎯 Practice Without Risk</h4>

              <p>Test strategies without risking your money.</p>
            </div>

            <div className="feature">
              <h4>🧠 Improve Your Skills</h4>

              <p>Build discipline, patience and confidence.</p>
            </div>

            <div className="feature">
              <h4>🔒 Secure Platform</h4>

              <p>Fast and secure authentication for every trader.</p>
            </div>
          </div>

          <blockquote>"Consistency turns practice into confidence."</blockquote>
        </section>
      </main>
    </>
  );
};

export default Login;
