// import "./WalletCard.css";
import { Wallet, ArrowUpRight } from "lucide-react";

const WalletCard = () => {
  return (
    <div className="wallet-card">

      <div className="wallet-top">

        <div className="wallet-icon">
          <Wallet size={26} />
        </div>

        <ArrowUpRight className="wallet-arrow"/>

      </div>

      <span className="wallet-title">
        Demo Wallet
      </span>

      <h1>₹5,000</h1>

      <p className="wallet-profit">
        +12.4% This Week
      </p>

      <div className="wallet-footer">

        <div>
          <small>Account</small>
          <h4>Bronze</h4>
        </div>

        <div>
          <small>Leverage</small>
          <h4>10x</h4>
        </div>

      </div>

    </div>
  );
};

export default WalletCard;