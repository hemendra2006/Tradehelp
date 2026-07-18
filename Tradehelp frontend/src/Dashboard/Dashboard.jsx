import "../style/Dashboard.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {Search,Bell,Settings,User,LayoutDashboard,ChartCandlestick,Wallet,BookOpen,Brain,Trophy,} from "lucide-react";
import axios from "axios";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();



useEffect(() => {
  const getMe = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/me",
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  getMe();
}, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/Logout",
        {},
        {
          withCredentials: true,
        },
      );

      alert(response.data.message);

      navigate("/", { replace: true });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}

      <aside className="sidebar">
        <h2 className="logo">TradeHelp</h2>

        <ul>
          <li>
            <NavLink
              to="/Dashboard"
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="Market"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <ChartCandlestick size={20} />
              Market
            </NavLink>
          </li>

          <li>
            <NavLink
              to="WalletCard"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <Wallet size={20} />
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="Journal"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <BookOpen size={20} />
              Journal
            </NavLink>
          </li>

          <li>
            <NavLink
              to="AICoach"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <Brain size={20} />
              AI Coach
            </NavLink>
          </li>

          <li>
            <NavLink
              to="Reward"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <Trophy size={20} />
              Rewards
            </NavLink>
          </li>
        </ul>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </aside>

      <Outlet />
    </div>
  );
};

export default Dashboard;
