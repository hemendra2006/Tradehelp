import "../TradecomponentsStyle/Sidebar.css";
import { Star, Search } from "lucide-react";

const coins = [
  {
    symbol: "BTCUSDT",
    name: "Bitcoin",
    price: "$118,450",
    change: "+2.41%",
    positive: true,
  },
  {
    symbol: "ETHUSDT",
    name: "Ethereum",
    price: "$3,820",
    change: "+1.15%",
    positive: true,
  },
  {
    symbol: "SOLUSDT",
    name: "Solana",
    price: "$186",
    change: "-0.82%",
    positive: false,
  },
  {
    symbol: "XRPUSDT",
    name: "XRP",
    price: "$2.91",
    change: "+3.08%",
    positive: true,
  },
  {
    symbol: "DOGEUSDT",
    name: "Dogecoin",
    price: "$0.23",
    change: "-1.52%",
    positive: false,
  },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <div className="watchlist-header">

        <h3>Watchlist</h3>

      </div>

      <div className="watchlist-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search Coin..."
        />

      </div>

      <div className="coin-list">

        {coins.map((coin) => (

          <div className="coin-card" key={coin.symbol}>

            <div className="coin-left">

              <Star size={16} />

              <div>

                <h4>{coin.symbol}</h4>

                <p>{coin.name}</p>

              </div>

            </div>

            <div className="coin-right">

              <h4>{coin.price}</h4>

              <span
                className={
                  coin.positive
                    ? "green"
                    : "red"
                }
              >
                {coin.change}
              </span>

            </div>

          </div>

        ))}

      </div>

    </aside>
  );
};

export default Sidebar;