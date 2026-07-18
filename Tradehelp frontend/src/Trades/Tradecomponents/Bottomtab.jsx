import "../TradecomponentsStyle/Bottomtab.css";

const BottomTabs = ({ socketStatus }) => {
  return (
    <div className="bottom-tabs">

      <div className="tabs-header">
        <button className="active">Positions</button>
        <button>Open Orders</button>
        <button>Order History</button>
        <button>Trade History</button>
      </div>

      <div className="tabs-content">
            No Open Position
      </div>





      <div className="tabs-footer">

  <div className="connection">

    <span className={`connection-dot ${socketStatus}`}></span>

    <span>
      {socketStatus === "connecting" && "Connecting..."}
      {socketStatus === "connected" && "Connected"}
      {socketStatus === "disconnected" && "Disconnected"}
      {socketStatus === "error" && "Error"}
    </span>

  </div>

</div>














    </div>
  );
};

export default BottomTabs;