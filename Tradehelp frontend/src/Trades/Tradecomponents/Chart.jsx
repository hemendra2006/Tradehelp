import React, { useEffect, useState } from "react";

const TradingDashboard = () => {
  const [symbol, setSymbol] = useState("BINANCE:BTCUSDT");

  // Ye effect TradingView widget load karega jab bhi symbol change hoga
  useEffect(() => {
    // 1. Script tag banayein
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    // 2. Script load hone ke baad widget initialize karein
    script.onload = () => {
      if (typeof window.TradingView !== "undefined") {
        new window.TradingView.widget({
          width: "100%",
          height: 600,
          symbol: symbol,
          interval: "15",
          timezone: "Asia/Kolkata",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          details: true,
          hotlist: true,
          calendar: true,
          studies: [
            "Moving Average@tv-basicstudies",
            "Bollinger Bands@tv-basicstudies"
          ],
          container_id: "tv_chart_container",
        });
      }
    };

    // 3. Script ko document ki body mein add karein
    document.body.appendChild(script);

    // 4. Cleanup: Jab component unmount ho ya symbol change ho toh purani script hata dein
    return () => {
      document.body.removeChild(script);
    };
  }, [symbol]); // Jab bhi 'symbol' change hoga, ye block wapas chalega

  // --- DATABASE ACTION HANDLERS ---

  const handleBuy = async () => {
    alert(`Buying ${symbol}... Executing database call.`);
    // Yahan aap backend par data bhejenge (Example):
    /*
    await fetch('/api/trade', {
      method: 'POST',
      body: JSON.stringify({ action: 'BUY', symbol: symbol, timestamp: Date.now() })
    });
    */
  };

  const handleSell = async () => {
    alert(`Selling ${symbol}... Executing database call.`);
    // Yahan aap backend par data bhejenge (Example):
    /*
    await fetch('/api/trade', {
      method: 'POST',
      body: JSON.stringify({ action: 'SELL', symbol: symbol, timestamp: Date.now() })
    });
    */
  };

  const handleSaveConfig = async () => {
    alert(`Saving chart layout for ${symbol} to database.`);
    // User ka current symbol, theme ya interval yahan save karwa sakte hain.
    /*
    await fetch('/api/user/chart-config', {
      method: 'POST',
      body: JSON.stringify({ defaultSymbol: symbol, theme: 'dark' })
    });
    */
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "white", padding: "20px", minHeight: "100vh" }}>
      
      {/* Navigation & Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <h2 style={{ margin: 0 }}>Trading Bull</h2>
          
          <select 
            value={symbol} 
            onChange={(e) => setSymbol(e.target.value)}
            style={{ padding: "8px", background: "#333", color: "white", border: "none", borderRadius: "4px" }}
          >
            <option value="BINANCE:BTCUSDT">Bitcoin</option>
            <option value="BINANCE:ETHUSDT">Ethereum</option>
            <option value="BINANCE:SOLUSDT">Solana</option>
            <option value="BINANCE:XRPUSDT">XRP</option>
            <option value="OANDA:XAUUSD">Gold</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button 
            onClick={handleBuy} 
            style={{ padding: "10px 20px", background: "#26a69a", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
          >
            BUY
          </button>
          <button 
            onClick={handleSell} 
            style={{ padding: "10px 20px", background: "#ef5350", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
          >
            SELL
          </button>
          <button 
            onClick={handleSaveConfig} 
            style={{ padding: "10px 20px", background: "#2962ff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
          >
            SAVE SETUP
          </button>
        </div>
      </div>

      {/* Chart Container */}
      <div 
        id="tv_chart_container" 
        style={{ height: "600px", width: "100%", borderRadius: "8px", overflow: "hidden", border: "1px solid #333" }}
      />
      
    </div>
  );
};

export default TradingDashboard;