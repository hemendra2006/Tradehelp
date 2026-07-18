import "../style/Trade.css";
// import Navbar from "../components/Navbar";
// import Sidebar from "../Trades/Tradecomponents/Sidebar";
import TradingChart from "../Trades/Tradecomponents/Chart";
// import Tradepanel from "../Trades/Tradecomponents/Tradepanel";
// import BottomTabs from "../Trades/Tradecomponents/Bottomtab";

import { useState } from "react";



const Trade = () => {

  // const [symbol, setSymbol] = useState("BINANCE:BTCUSDT");

  const [socketStatus, setSocketStatus] = useState("connected");


  return (
    <div className="trade-page">

      {/* <Navbar /> */}

      <div className="trade-container">

        {/* <Sidebar/> */}

        <TradingChart setSocketStatus={setSocketStatus} />

        {/* <Tradepanel /> */}

      </div>

      {/* <BottomTabs socketStatus={socketStatus} /> */}

    </div>
  );
};

export default Trade;