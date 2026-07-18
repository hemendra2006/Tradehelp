import "../style/Footer.css";
import Logo from "../assets/Brand.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

    <div className="footer-top">

        <div className="footer-brand">

            <div className="footer-logo">
                <img src={Logo} alt="Tradehelp" width={60} ></img>
            </div>

            <h2> TradeHelp</h2>

            <p>
                Learn. Practice. Improve.
                Become a disciplined trader before
                risking real money.
            </p>

            <div className="socials">
                <a href="#">𝕏</a>
                <a href="#">in</a>
                <a href="#">▶</a>
                <a href="#">◎</a>
            </div>

        </div>

        <div className="footer-links">
            <div>
                <h3>Platform </h3>
                <a href="#"> Demo Trading</a>
                <a href="#">Journal</a>
                <a href="#">Challenges</a>
                <a href="#">Rewards</a>
            </div>

            <div>
                <h3> Learn</h3>
                <a href="#"> Candlesticks</a>
                <a href="#"> Indicators</a>
                <a href="#"> SMC</a>
                <a href="#"> ICT</a>
            </div>

            <div>
                <h3>Company</h3>
                <a href="#"> About</a>
                <a href="#"> Contact</a>
                <a href="#"> Privacy Policy</a>
                <a href="#">Terms</a>
            </div>
        </div>

    </div>

    <div className="footer-bottom">
        <p>© 2026 TradeHelp. All Rights Reserved.</p>

        <span> Built for Beginner Traders ❤️</span>
    </div>
        <div className="footer-bottomtext">
            Tradehelp
        </div>

</footer>
  );
}

export default Footer;