import "../style/Signup.css";
import CursorGrid from "../Reactbits/CursorGrid";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.name, e.target.value);
  };

  const handleSubmit = async () => {

  if (
    !formData.name ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    alert("Please fill all fields");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {

    const response = await axios.post(
      "http://localhost:3000/api/Signup",
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
      {
        withCredentials: true,
      }
    );

    // console.log(response.data);

    alert(response.data.message);

    navigate("/Dashboard", { replace: true });

  } catch (error) {

    // console.log(error);

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
          color="#8b5cf6"
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

      {/* Main Page */}
      <main className="signup-main">
        {/* LEFT */}
        <section className="signup-left">
          <div className="signup-card">
            <h2>Create Account</h2>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

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
                placeholder="Create password"
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />
            </div>

            <button  onClick={handleSubmit} className="signup-btn">Create Demo Account</button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button className="google-btn">Continue with Google</button>

            <p className="login-link">
              Already have an account?
              <span onClick={() => {navigate("/login");}}> Login</span>
            </p>
          </div>
        </section>

        {/* RIGHT */}
        <section className="signup-right">
          <h1>Welcome to TradeHelp</h1>

          <h3>Learn. Practice. Grow.</h3>

          <p>
            TradeHelp helps you build confidence through realistic demo trading
            before you risk real capital.
          </p>

          <div className="feature-box">
            <div className="feature">
              📈
              <div>
                <h4>Realistic Trading</h4>
                <p>Experience markets with live price movements.</p>
              </div>
            </div>

            <div className="feature">
              🎯
              <div>
                <h4>Risk-Free Learning</h4>
                <p>Practice strategies without financial pressure.</p>
              </div>
            </div>

            <div className="feature">
              🧠
              <div>
                <h4>Improve Psychology</h4>
                <p>Build patience, discipline and confidence.</p>
              </div>
            </div>

            {/* <div className="feature">
              🔒
              <div>
                <h4>Secure Platform</h4>
                <p>Modern authentication with a clean experience.</p>
              </div>
            </div> */}
          </div>

          <blockquote>
            "Every successful trader begins by learning. Practice today, trade
            confidently tomorrow."
          </blockquote>
        </section>
      </main>
    </>
  );
};

export default Signup;
