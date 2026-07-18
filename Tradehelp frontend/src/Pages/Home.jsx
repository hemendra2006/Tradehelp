import "../style/Home.css";
import Heroright from "../assets/heroright.png";
import {
  ShieldCheck,
  Brain,
  Trophy,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Home() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
  const checkUser = async () => {
    try {
      await axios.get("http://localhost:3000/api/me", {
        withCredentials: true,
      });

      setIsLoggedIn(true);

    } catch (error) {

      setIsLoggedIn(false);

    }
  };

  checkUser();
}, []);

  const navigate = useNavigate();

  return (
    <div className="home">
      {/* ================= Background ================= */}

      <div className="hero-bg"></div>
      <div className="grid"></div>
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      {/* // ================= Hero =================  */}

      <section className="hero">
        <div className="hero-left">
          <div className="badge">
            🚀 India's Next Generation Trading Learning Platform
          </div>

          <h1>
            Stop
            <span> Gambling </span>
            Start Trading Like
            <br />A Professional.
          </h1>

          <p>
            Learn. Practice. Build Discipline. Earn Bigger Demo Capital. Unlock
            Your Trading License.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate(isLoggedIn ? "/Dashboard" : "/signup")} className="primary" >  Start Free Demo </button>
            <button className="secondary">
              Explore Platform <ChevronRight size={18} />
            </button>
          </div>

          <div className="feature-pills">
            <div>
              <ShieldCheck />
              Psychology
            </div>
            <div>
              {" "}
              <Brain /> AI Coach
            </div>
            <div>
              <Trophy /> Rewards{" "}
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="level-tower">
            <div className="tower-line"></div>
            <div className="tower-item bronze">
              <div className="tower-dot"></div>
              <div className="tower-content">
                <h5>Bronze</h5>
                <p>₹5,000</p>
              </div>
            </div>
            <div className="tower-item silver">
              <div className="tower-dot"></div>
              <div className="tower-content">
                <h5>Silver</h5>
                <p>₹10,000</p>
              </div>
            </div>
            <div className="tower-item gold">
              <div className="tower-dot"></div>
              <div className="tower-content">
                <h5>Gold</h5>
                <p>₹50,000</p>
              </div>
            </div>
            <div className="tower-item diamond">
              <div className="tower-dot"></div>
              <div className="tower-content">
                <h5>Diamond</h5>
                <p>₹1,00,000</p>
              </div>
            </div>
          </div>

          <div className="particle p1"></div>
          <div className="particle p2"></div>
          <div className="particle p3"></div>
          <div className="particle p4"></div>
          <div className="particle p5"></div>
          <div className="particle p6"></div>

          <div className="level-card">
            <p className="small">CURRENT LEVEL</p>
            <h2>BRONZE</h2>

            <div className="progress">
              <div className="progress-fill"></div>
            </div>

            <div className="level-info">
              <div>
                <span>Capital</span>
                <h3>₹5,000</h3>
              </div>

              <div>
                <span>Next Unlock</span>
                <h3>₹10,000</h3>
              </div>
            </div>
          </div>

          <div className="floating-card card1">
            🏆<h4>Trading License</h4>
            <span>Locked</span>
          </div>

          <div className="floating-card card2">
            🔥<h4>Discipline</h4>
            <span>82%</span>
          </div>

          <div className="floating-card card3">
            ⭐<h4>Next Mission</h4>
            <span>Complete 20 Trades</span>
          </div>

          <div className="orb">
            <div className="ring ring1"></div>
            <div className="ring ring2"></div>
            <div className="ring ring3"></div>

            <div className="center-logo">
              <div className="core"></div>
              <div className="hexagon hex1"></div>
              <div className="hexagon hex2"></div>
              <div className="energy energy1"></div>
              <div className="energy energy2"></div>
              <div className="scan-line"></div>
              <div className="pulse-ring pulse1"></div>
              <div className="pulse-ring pulse2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* // ================= Why TradeHelp ================= */}

      <section className="why">
        <div className="why-heading">
          <span>WHY TRADEHELP?</span>
          <h2>Stop Practicing Like It's a Game.</h2>

          <p>
            Most demo trading platforms teach bad habits. We train you to become
            a disciplined trader.
          </p>
        </div>

        <div className="why-container">
          <div className="bad-side">
            <div className="compare-card bad">
              <h3>❌ Other Demo Platforms</h3>

              <ul>
                <li>Unlimited Demo Balance</li>
                <li>Random Trading</li>
                <li>No Risk Management</li>
                <li>No Psychology</li>
                <li>No Learning Path</li>
                <li>Develops Gambling Habits</li>
              </ul>
            </div>
          </div>

          <div className="good-side">
            <div className="compare-card good">
              <h3>✅ TradeHelp</h3>

              <ul>
                <li>Start with ₹5,000</li>
                <li>Earn Bigger Capital</li>
                <li>Trading Journal</li>
                <li>Psychology Training</li>
                <li>AI Coach</li>
                <li>Become Ready For Real Trading</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="features-heading">
          <span className="section-badge">WHY CHOOSE TRADEHELP</span>

          <h2>
            Everything You Need To Become
            <br />A Better Trader.
          </h2>

          <p>
            Learn, practice, analyze and improve with one powerful platform
            designed especially for beginners.
          </p>
        </div>

        <div className="feature-grid">
          {/* Demo Trading */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">📈</div>

            <h3>Demo Trading</h3>

            <p>
              Practice with realistic virtual capital before risking real money.
            </p>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>

          {/* AI Coach */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">🤖</div>

            <h3>AI Trading Coach</h3>

            <p>
              Receive intelligent feedback after every trade and improve your
              decision making.
            </p>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>

          {/* Journal */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">📔</div>

            <h3>Trading Journal</h3>

            <p>
              Save trade screenshots, emotions, reasons, mistakes and lessons
              learned.
            </p>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>

          {/* Psychology */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">🧠</div>

            <h3>Psychology Training</h3>

            <p>
              Control fear, greed, FOMO and revenge trading using guided
              exercises.
            </p>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>

          {/* Candlestick */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">🕯️</div>

            <h3>Candlestick Library</h3>

            <p>
              Learn every candlestick pattern with simple explanations and real
              examples.
            </p>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>

          {/* SMC */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">📚</div>

            <h3>SMC & ICT</h3>

            <p>
              Understand Smart Money Concepts and ICT strategies in
              beginner-friendly language.
            </p>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>

          {/* Rewards */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">🏆</div>

            <h3>Rewards System</h3>

            <p>
              Unlock achievements, badges and larger demo capital by completing
              missions.
            </p>

            <button>Learn More →</button>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>

          {/* Challenges */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">🎯</div>

            <h3>Daily Challenges</h3>

            <p>
              Complete trading missions every day to build discipline and
              consistency.
            </p>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>

          {/* Analytics */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">📊</div>

            <h3>Performance Analytics</h3>

            <p>
              Track your win rate, risk management, psychology score and overall
              progress.
            </p>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>

          {/* License */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">🎓</div>

            <h3>Trading License</h3>

            <p>
              Complete learning paths and prove your skills before moving to
              real trading.
            </p>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">👑</div>

            <h3>Leaderboard</h3>

            <p>
              Compete with traders across the platform and climb through
              different levels.
            </p>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>

          {/* Real Trading */}
          <div className="feature-card">
            <div className="mouse-light"></div>
            <div className="overlay"></div>

            <div className="feature-icon">🚀</div>

            <h3>Future Real Trading</h3>

            <p>
              Transition from demo to real trading once you're disciplined and
              confident.
            </p>

            <div className="feature-footer">
              <span>Explore</span>
              <div className="feature-arrow">→</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CTA SECTION ====================== */}

      <section className="cta">
        <div className="cta-glow"></div>

        <div className="cta-content">
          <span className="cta-badge">START YOUR JOURNEY</span>

          <h2>
            Stop Guessing.
            <br />
            Start Learning Like A Professional.
          </h2>

          <p>
            Join thousands of traders who are building discipline before risking
            real money.
          </p>

          <div className="cta-buttons">
            <button onClick={() => navigate(isLoggedIn ? "/Dashboard" : "/signup")} className="cta-primary" >  Start Free Demo </button>

            <button className="cta-secondary">Explore Platform</button>
          </div>

          <div className="cta-stats">
            <div>
              <h3>5K+</h3>
              <span>Practice Trades</span>
            </div>

            <div>
              <h3>100+</h3>
              <span>Lessons</span>
            </div>

            <div>
              <h3>24/7</h3>
              <span>AI Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== TESTIMONIALS =========================== */}

      <section className="testimonials">
        <div className="testimonial-heading">
          <span className="section-badge">COMMUNITY</span>

          <h2>
            Built For Beginners.
            <br />
            Loved By Traders.
          </h2>

          <p>
            Thousands of learners are improving their trading discipline every
            day.
          </p>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="quote">“</div>

            <p>
              Finally a platform that teaches discipline instead of encouraging
              random trading.
            </p>

            <div className="user">
              <div className="avatar">H </div>

              <div>
                <h4>Hemendra</h4>
                <span> Beginner Trader</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote">“</div>

            <p>
              The journal and psychology section completely changed the way I
              trade.
            </p>

            <div className="user">
              <div className="avatar">A </div>

              <div>
                <h4> Aman </h4>
                <span>Swing Trader </span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote">“</div>

            <p>
              This feels more like a trading school than a demo trading
              platform.
            </p>

            <div className="user">
              <div className="avatar"> R </div>

              <div>
                <h4> Rahul </h4>
                <span> Crypto Trader </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================  FAQ  =========================== */}

      <section className="faq">
        <div className="faq-heading">
          <span className="section-badge">FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before starting your trading journey.
          </p>
        </div>

        <div className="faq-container">
          <div className="faq-item">
            <h3>Is this a real trading platform?</h3>

            <p>
              No. It is a learning-first platform designed to help beginners
              practice before risking real money.
            </p>
          </div>

          <div className="faq-item">
            <h3>Why do I start with only ₹5,000?</h3>

            <p>
              We want you to learn proper money management. Bigger demo capital
              is earned through discipline and achievements.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I unlock more demo balance?</h3>

            <p>
              Yes. Complete challenges, maintain discipline, and finish learning
              modules to unlock higher virtual capital.
            </p>
          </div>

          <div className="faq-item">
            <h3>Will real trading be available?</h3>

            <p>
              Yes. Real trading support is planned for a future update after the
              learning platform is fully developed.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================  STATS SECTION =========================== */}

      <section className="stats">
        <div className="stats-card">
          <h2>10K+</h2>

          <span>Demo Trades</span>
        </div>

        <div className="stats-card">
          <h2>500+</h2>

          <span>Learning Lessons</span>
        </div>

        <div className="stats-card">
          <h2>98%</h2>

          <span>Discipline Score</span>
        </div>

        <div className="stats-card">
          <h2>24/7</h2>

          <span>AI Assistance</span>
        </div>
      </section>

      {/* ===========================   NEWSLETTER  =========================== */}

      <section className="newsletter">
        <div className="newsletter-left">
          <span className="section-badge">STAY UPDATED</span>

          <h2>Never Miss A Trading Lesson.</h2>

          <p>
            Get new learning content, trading challenges, psychology tips and
            platform updates directly in your inbox.
          </p>
        </div>

        <div className="newsletter-right">
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email..." />

            <button>Join Free</button>
          </div>
        </div>
      </section>

      {/* ===========================   APP DOWNLOAD =========================== */}

      <section className="app-section">
        <div className="app-left">
          <span className="section-badge">COMING SOON</span>

          <h2>Learn Anywhere. Trade Anywhere.</h2>

          <p>
            Continue your trading journey on desktop, tablet and mobile with one
            synchronized account.
          </p>

          <div className="store-buttons">
            <button className="store-btn">📱 Google Play</button>

            <button className="store-btn">🍎 App Store</button>
          </div>
        </div>

        <div className="app-right">
          <div className="phone">
            <div className="phone-header">TradeHelp</div>

            <div className="phone-body">
              <div className="mini-card">
                <h4>Current Level</h4>

                <h3>Bronze</h3>
              </div>

              <div className="mini-card">
                <h4>Capital</h4>

                <h3>₹5,000</h3>
              </div>

              <div className="mini-card">
                <h4>Today's Mission</h4>

                <p>Complete 5 disciplined trades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================   CONTACT SECTION =========================== */}

      <section className="contact-section">
        <div className="contact-left">
          <span className="section-badge">CONTACT US</span>

          <h2>
            Have Questions?
            <br />
            We're Here To Help.
          </h2>

          <p>
            Reach out anytime. Whether you're just starting your trading journey
            or need help using the platform, we'll be happy to assist you.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>

              <div>
                <h4>Email</h4>

                <span>support@tradehelp.com</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💬</div>

              <div>
                <h4>Live Chat</h4>

                <span>Available 24×7</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>

              <div>
                <h4>Location</h4>

                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Subject" />

            <textarea rows="6" placeholder="Write your message..."></textarea>

            <button>Send Message</button>
          </form>
        </div>
      </section>

      {/* ===========================    FINAL BOTTOM CTA  =========================== */}

      <section className="final-cta">
        <div className="final-card">
          <div className="final-badge">🚀 READY TO START?</div>

          <h2>
            Your First Profitable Trade
            <br />
            Starts With Your First Disciplined Trade.
          </h2>

          <p>
            Don't chase profits. Build consistency, confidence and discipline
            first. The profits will follow.
          </p>

          <div className="final-buttons">
                        <button onClick={() => navigate(isLoggedIn ? "/Dashboard" : "/signup")} className="cta-primary" >  Start Free Demo </button>

            <button className="final-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* ===========================   TRUST SECTION  =========================== */}

      <section className="trust">
        <div className="trust-heading">
          <span className="section-badge">WHY TRADEHELP</span>

          <h2>Built Around Real Trading Habits</h2>

          <p>
            Every feature is designed to help you become disciplined before you
            trade with real money.
          </p>
        </div>

        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon">🛡️</div>

            <h3> Risk First </h3>

            <p>Learn risk management before learning profits.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon">📒</div>

            <h3> Journal Every Trade </h3>

            <p>Build consistency using proper trading records.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon">🎯</div>

            <h3> Mission Based Learning </h3>

            <p>Unlock progress only after completing trading challenges.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon">🧠</div>

            <h3> Psychology Matters </h3>

            <p>Remove FOMO, greed and emotional trading habits.</p>
          </div>
        </div>
      </section>

      {/* ===========================
        ROADMAP SECTION
=========================== */}

      <section className="roadmap">
        <div className="roadmap-heading">
          <span className="section-badge">YOUR JOURNEY</span>

          <h2>From Beginner To Confident Trader</h2>

          <p>
            Follow a structured roadmap instead of learning random topics from
            different places.
          </p>
        </div>

        <div className="roadmap-container">
          <div className="roadmap-line"></div>

          <div className="roadmap-item">
            <div className="roadmap-number">01</div>

            <div className="roadmap-content">
              <h3>Learn Basics</h3>

              <p>
                Candlesticks, market structure, support & resistance and risk
                management.
              </p>
            </div>
          </div>

          <div className="roadmap-item">
            <div className="roadmap-number">02</div>

            <div className="roadmap-content">
              <h3>Practice</h3>

              <p>Start with ₹5,000 demo balance and follow trading rules.</p>
            </div>
          </div>

          <div className="roadmap-item">
            <div className="roadmap-number">03</div>

            <div className="roadmap-content">
              <h3>Analyze</h3>

              <p>Maintain a journal and improve using AI feedback.</p>
            </div>
          </div>

          <div className="roadmap-item">
            <div className="roadmap-number">04</div>

            <div className="roadmap-content">
              <h3>Unlock Rewards</h3>

              <p>Complete missions and unlock more virtual capital.</p>
            </div>
          </div>

          <div className="roadmap-item">
            <div className="roadmap-number">05</div>

            <div className="roadmap-content">
              <h3>Trade With Confidence</h3>

              <p>Move towards real trading only after proving consistency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
        ACHIEVEMENTS
=========================== */}

      <section className="achievements">
        <div className="achievements-heading">
          <span className="section-badge">ACHIEVEMENTS</span>

          <h2>Earn More Than Just Profits</h2>

          <p>
            Unlock badges, increase your demo capital, and prove your trading
            discipline.
          </p>
        </div>

        <div className="achievement-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🥉</div>

            <h3>Bronze Trader</h3>

            <p>Complete your first 20 disciplined trades.</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🥈</div>

            <h3>Risk Master</h3>

            <p>Maintain proper risk management for 30 trades.</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🥇</div>

            <h3>Gold Discipline</h3>

            <p>Trade for 30 days without breaking your rules.</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">💎</div>

            <h3>Diamond Trader</h3>

            <p>Unlock ₹1,00,000 demo capital through achievements.</p>
          </div>
        </div>
      </section>

      {/* ===========================
        LEADERBOARD
=========================== */}

      <section className="leaderboard">
        <div className="leaderboard-heading">
          <span className="section-badge">LEADERBOARD</span>

          <h2>Top Performing Traders</h2>

          <p>
            Climb the leaderboard by following discipline, not by taking
            unnecessary risks.
          </p>
        </div>

        <div className="leaderboard-table">
          <div className="leaderboard-row head">
            <span>#</span>

            <span>Trader</span>

            <span>Level</span>

            <span>Win Rate</span>

            <span>Points</span>
          </div>

          <div className="leaderboard-row">
            <span>🥇 1</span>

            <span>Rahul</span>

            <span>Diamond</span>

            <span>82%</span>

            <span>12,850</span>
          </div>

          <div className="leaderboard-row">
            <span>🥈 2</span>

            <span>Aman</span>

            <span>Gold</span>

            <span>79%</span>

            <span>11,620</span>
          </div>

          <div className="leaderboard-row">
            <span>🥉 3</span>

            <span>Priya</span>

            <span>Gold</span>

            <span>76%</span>

            <span>10,980</span>
          </div>

          <div className="leaderboard-row">
            <span>4</span>

            <span>You</span>

            <span>Bronze</span>

            <span>--</span>

            <span>0</span>
          </div>
        </div>
      </section>

      {/* ===========================
        AI ASSISTANT
=========================== */}

      <section className="ai-section">
        <div className="ai-left">
          <span className="section-badge">AI ASSISTANT</span>

          <h2>Your Personal Trading Mentor</h2>

          <p>
            Ask questions, analyze your trades, improve your psychology and
            receive instant learning guidance anytime.
          </p>

          <div className="ai-features">
            <div className="ai-feature">
              <span>✓</span>

              <p>Trade Analysis</p>
            </div>

            <div className="ai-feature">
              <span>✓</span>

              <p>Psychology Feedback</p>
            </div>

            <div className="ai-feature">
              <span>✓</span>

              <p>Risk Management Tips</p>
            </div>

            <div className="ai-feature">
              <span>✓</span>

              <p>24×7 Learning Support</p>
            </div>
          </div>

          <button className="ai-btn">Ask AI Assistant →</button>
        </div>

        <div className="ai-right">
          <div className="ai-window">
            <div className="ai-header">
              <div className="ai-dot red"></div>

              <div className="ai-dot yellow"></div>

              <div className="ai-dot green"></div>
            </div>

            <div className="chat">
              <div className="message user">Why did I lose this trade?</div>

              <div className="message ai">
                You entered before confirmation. Wait for candle close and
                maintain 1:2 Risk Reward.
              </div>

              <div className="message user">How can I improve?</div>

              <div className="message ai">
                Practice today's challenge and record every trade in your
                journal.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
        TRADING CHALLENGES
=========================== */}

      <section className="challenges">
        <div className="challenge-heading">
          <span className="section-badge">DAILY MISSIONS</span>

          <h2>Complete Challenges. Build Discipline.</h2>

          <p>
            Improve step by step by completing real trading missions instead of
            randomly placing trades.
          </p>
        </div>

        <div className="challenge-grid">
          <div className="challenge-card">
            <div className="challenge-top">
              <span className="challenge-tag">EASY</span>

              <span className="challenge-points">+100 XP</span>
            </div>

            <h3>No Revenge Trading</h3>

            <p>Finish today's session without taking revenge trades.</p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <small>Progress 60%</small>
          </div>

          <div className="challenge-card">
            <div className="challenge-top">
              <span className="challenge-tag medium">MEDIUM</span>

              <span className="challenge-points">+250 XP</span>
            </div>

            <h3>Follow Risk Management</h3>

            <p>Complete five trades using a fixed 1:2 Risk Reward ratio.</p>

            <div className="progress-bar">
              <div className="progress-fill fill2"></div>
            </div>

            <small>Progress 35%</small>
          </div>

          <div className="challenge-card">
            <div className="challenge-top">
              <span className="challenge-tag hard">HARD</span>

              <span className="challenge-points">+500 XP</span>
            </div>

            <h3>Perfect Trading Week</h3>

            <p>Follow every trading rule for seven consecutive days.</p>

            <div className="progress-bar">
              <div className="progress-fill fill3"></div>
            </div>

            <small>Progress 10%</small>
          </div>
        </div>
      </section>

      {/* ===========================
        HOW IT WORKS
=========================== */}

      <section className="how-it-works">
        <div className="how-heading">
          <span className="section-badge">HOW IT WORKS</span>

          <h2>Learn. Practice. Improve. Repeat.</h2>

          <p>
            A simple roadmap that helps you become a disciplined trader step by
            step.
          </p>
        </div>

        <div className="steps">
          <div className="step-card">
            <div className="step-number">01</div>

            <div className="step-icon">📚</div>

            <h3>Learn</h3>

            <p>
              Study candlesticks, indicators, SMC, ICT and trading psychology.
            </p>
          </div>

          <div className="step-arrow">➜</div>

          <div className="step-card">
            <div className="step-number">02</div>

            <div className="step-icon">💹</div>

            <h3>Practice</h3>

            <p>
              Trade with limited demo capital and follow proper risk management.
            </p>
          </div>

          <div className="step-arrow">➜</div>

          <div className="step-card">
            <div className="step-number">03</div>

            <div className="step-icon">🏆</div>

            <h3>Grow</h3>

            <p>
              Complete missions, unlock rewards and prepare for real trading.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
        PLATFORM PREVIEW
=========================== */}

      <section className="preview">
        <div className="preview-heading">
          <span className="section-badge">PLATFORM PREVIEW</span>

          <h2>Everything In One Dashboard</h2>

          <p>
            Learn, trade, analyze and improve from one clean and
            distraction-free workspace.
          </p>
        </div>

        <div className="preview-window">
          <div className="window-top">
            <div className="window-dots">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>

            <h4>TradeHelp Dashboard</h4>
          </div>

          <div className="dashboard">
            <div className="sidebar">
              <div className="menu active">Dashboard</div>

              <div className="menu">Demo Trading</div>

              <div className="menu">Journal</div>

              <div className="menu">AI Coach</div>

              <div className="menu">Rewards</div>
            </div>

            <div className="dashboard-content">
              <div className="dashboard-cards">
                <div className="dash-card">
                  <h5>Current Level</h5>

                  <h3>Bronze</h3>
                </div>

                <div className="dash-card">
                  <h5>Capital</h5>

                  <h3>₹5,000</h3>
                </div>

                <div className="dash-card">
                  <h5>Win Rate</h5>

                  <h3>68%</h3>
                </div>
              </div>

              <div className="dashboard-box">
                <h4>Today's Goal</h4>

                <p>
                  Complete 5 quality trades and update your trading journal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
        BLOG SECTION
=========================== */}

      <section className="blogs">
        <div className="blogs-heading">
          <span className="section-badge">LEARN DAILY</span>

          <h2>Latest Learning Articles</h2>

          <p>
            Read beginner-friendly trading guides, psychology lessons and market
            education.
          </p>
        </div>

        <div className="blog-grid">
          <article className="blog-card">
            <div className="blog-image">📈</div>

            <div className="blog-content">
              <span className="blog-tag">Beginner</span>

              <h3>Candlestick Patterns Every Trader Should Know</h3>

              <p>
                Learn the most important candlestick patterns with simple
                examples.
              </p>

              <button>Read Article →</button>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image">🧠</div>

            <div className="blog-content">
              <span className="blog-tag">Psychology</span>

              <h3>Stop FOMO Before It Destroys Your Account</h3>

              <p>Discover practical ways to control emotions while trading.</p>

              <button>Read Article →</button>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image">💰</div>

            <div className="blog-content">
              <span className="blog-tag">Risk Management</span>

              <h3>Why Risk Management Is More Important Than Winning</h3>

              <p>Protect your capital using professional money management.</p>

              <button>Read Article →</button>
            </div>
          </article>
        </div>
      </section>

      {/* ===========================
        PRICING SECTION
=========================== */}

      <section className="pricing">
        <div className="pricing-heading">
          <span className="section-badge">PRICING</span>

          <h2>Start Free. Upgrade When You're Ready.</h2>

          <p>
            Learn without paying anything. Unlock advanced tools whenever you
            need them.
          </p>
        </div>

        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-tag">FREE</div>

            <h3> Starter </h3>

            <h1> ₹0 </h1>

            <p> Perfect for beginners. </p>

            <ul>
              <li>✔ Demo Trading</li>
              <li>✔ Trading Journal</li>
              <li>✔ Candlestick Library</li>
              <li>✔ Daily Challenges</li>
              <li>✔ Basic AI Help</li>
            </ul>

                        <button onClick={() => navigate(isLoggedIn ? "/Dashboard" : "/signup")} className="cta-primary" >  Start Free </button>
          </div>

          <div className="price-card featured">
            <div className="popular">MOST POPULAR</div>

            <div className="price-tag">PRO</div>

            <h3> Professional</h3>

            <h1>
              {" "}
              ₹99<span> /month</span>
            </h1>

            <p> For serious learners. </p>

            <ul>
              <li>✔ Everything in Free</li>
              <li>✔ Advanced AI Coach</li>
              <li>✔ Psychology Reports</li>
              <li>✔ Advanced Analytics</li>
              <li>✔ Unlimited Journal</li>
              <li>✔ Premium Courses</li>
            </ul>

            <button> Coming Soon </button>
          </div>

          {/* FUTURE */}

          <div className="price-card">
            <div className="price-tag">FUTURE</div>

            <h3> Real Trading </h3>

            <h1> Coming Soon </h1>

            <p>Trade with real capital after proving consistency.</p>

            <ul>
              <li>✔ Verified Trader</li>
              <li>✔ Wallet</li>
              <li>✔ Live Orders</li>
              <li>✔ Portfolio</li>
              <li>✔ Real Rewards</li>
            </ul>

            <button> Notify Me</button>
          </div>
        </div>
      </section>

      {/* ===========================
        PARTNERS
=========================== */}

      <section className="partners">
        <div className="partners-heading">
          <span className="section-badge">POWERED BY</span>

          <h2> Built With Modern Technologies </h2>

          <p>
            Fast, secure and scalable technologies powering the next generation
            learning platform.
          </p>
        </div>

        <div className="partner-grid">
          <div className="partner-card">
            <div className="partner-icon">⚛️</div>

            <h3>React</h3>
          </div>

          <div className="partner-card">
            <div className="partner-icon">🟢</div>

            <h3>Node.js</h3>
          </div>

          <div className="partner-card">
            <div className="partner-icon">🚀</div>

            <h3> Express </h3>
          </div>

          <div className="partner-card">
            <div className="partner-icon">🍃</div>

            <h3>MongoDB</h3>
          </div>

          <div className="partner-card">
            <div className="partner-icon">📊</div>

            <h3>TradingView</h3>
          </div>

          <div className="partner-card">
            <div className="partner-icon">🤖</div>

            <h3>AI Powered</h3>
          </div>
        </div>
      </section>

      {/* ===========================
        PLATFORM ROADMAP
=========================== */}

      <section className="future-roadmap">
        <div className="future-heading">
          <span className="section-badge"> FUTURE ROADMAP</span>
          <h2> What's Coming Next</h2>
          <p>
            TradeHelp is continuously evolving to become a complete trading
            learning ecosystem.
          </p>
        </div>

        <div className="future-grid">
          <div className="future-card completed">
            <span className="future-status"> ✓ Completed </span>
            <h3>Demo Trading</h3>
            <p> Practice with limited virtual capital. </p>
          </div>

          <div className="future-card Progress">
            <span className="future-status"> 🚧 In Progress</span>
            <h3>AI Trading Coach</h3>
            <p> Personalized trade analysis and psychology guidance. </p>
          </div>

          <div className="future-card">
            <span className="future-status"> 🔜 Coming Soon</span>
            <h3>Trading Competitions</h3>
            <p> Compete with traders and earn rewards.</p>
          </div>

          <div className="future-card">
            <span className="future-status"> 🔜 Coming Soon</span>
            <h3>Real Trading</h3>
            <p>Transition from demo to live trading.</p>
          </div>

          <div className="future-card">
            <span className="future-status"> 🔜 Coming Soon</span>
            <h3>Copy Trading</h3>
            <p> Learn by following experienced traders. </p>
          </div>

          <div className="future-card">
            <span className="future-status"> 🔜 Coming Soon</span>
            <h3>Mobile App</h3>
            <p>Access your account from anywhere. </p>
          </div>
        </div>
      </section>

      {/* ===========================  FINAL BACKGROUND  =========================== */}

      <div className="bg-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="gradient-line"></div>

      <div className="noise"></div>
    </div>
  );
}
