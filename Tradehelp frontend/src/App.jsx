import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Signup from "./Auth/Signup.jsx";
import Login from "./Auth/Login.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import WalletCard from "./Dashboard/Components/WalletCard";
import PortfolioCard from "./Dashboard/Components/PortfolioCard";
import Journal from "./Dashboard/Components/Journal";
import AICoach from "./Dashboard/Components/AICoach";
import Market from "./Dashboard/Components/MarketOverview";
import Reward from "./Dashboard/Components/Reward";
import DashboardHome from "./Dashboard/Components/Dashboardhome";
import Trades from "./Trades/Trade";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./Auth/Protectedroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Signup",
    element: (
      <div>
        <Signup />
      </div>
    ),
  },
  {
    path: "/Login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/Dashboard",
    element:<ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "Market",
        element: <Market />,
      },
      {
        path: "WalletCard",
        element: <WalletCard />,
      },
      {
        path: "portfolio",
        element: <PortfolioCard />,
      },
      {
        path: "journal",
        element: <Journal />,
      },
      {
        path: "aicoach",
        element: <AICoach />,
      },
      {
        path: "Reward",
        element: <Reward />,
      },
    ],
  },
  {
    path: "/Trades",
    element: (
      <div>
        <Trades />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
