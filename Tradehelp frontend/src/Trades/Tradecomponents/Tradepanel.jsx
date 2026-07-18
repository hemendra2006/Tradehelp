import "../TradecomponentsStyle/Tradepanel.css";

const TradePanel = () => {
  return (
    <div className="trade-panel">

      <div className="trade-title">
        <h3>Trade</h3>
      </div>

      <div className="trade-quantity">
        <label>Quantity</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          defaultValue="1"
        />
      </div>

      <div className="trade-buttons">
        <button className="buy-btn">
          Buy
        </button>

        <button className="sell-btn">
          Sell
        </button>
      </div>

    </div>
  );
};

export default TradePanel;