import "../TradecomponentsStyle/Navpanel.css";
import {
  Search,
  Bell,
  Wallet,
  User,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">

        <div className="logo-circle">T</div>

        <div className="logo-text">

          <h2>TradeHelp</h2>

          <p>Demo Trading</p>

        </div>

      </div>

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search BTC, ETH, SOL..."
        />

      </div>

      <div className="right-side">

        <div className="market-price">

          <span>BTC</span>

          <h4>$118,450</h4>

        </div>

        <div className="wallet">

          <Wallet size={20} />

          <span>$5,000</span>

        </div>

        <button className="icon-btn">

          <Bell size={20} />

        </button>

        <button className="profile">

          <User size={20} />

        </button>

      </div>

    </nav>
  );
};

export default Navbar;