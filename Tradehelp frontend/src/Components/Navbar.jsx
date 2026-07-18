import "../style/Navbar.css";
import { FaChartLine } from "react-icons/fa";
import Logo from "../assets/Brand.png";
import {ShieldCheck,Brain,Trophy,ArrowRight,ChevronRight,} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function Navbar() {

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

    }
  };

  checkUser();
}, []);

    const navigate = useNavigate();


  return (
    <nav className="navbar">
      
      <div className="Logo">
        <img src={Logo} alt="Logo" width={50} />
        <h2>TradeHelp</h2>
      </div>

      <ul>
        <li onClick={()=>{navigate("/Dashboard")}}>Dashboard</li>
        <li>Features</li>
        <li>Rewards</li>
        <li>About</li>
        <li onClick={()=>{navigate("/Trades")}}>Trade</li>
      </ul>

      <div className="nav-btns">

       {
  isLoggedIn ? (

    <button
      onClick={() => navigate("/Dashboard")}
      className="demo"
    >
      Start Trading
    </button>

  ) : (

    <>
      <button onClick={() => navigate("/Login")} className="login"> Login</button>

      <button onClick={() => navigate("/signup")} className="demo"> Start Demo <ArrowRight size={18} /></button>
    </>

  )
}

      </div>
    </nav>
  );
}

export default Navbar;
