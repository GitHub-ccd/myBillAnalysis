import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>myBillAnalysis</title>
        <meta name="description" content="Animated landing page for myBillAnalysis" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="homepage">
        <header className="site-header">
          <div className="brand">myBillAnalysis</div>
          <nav className="nav-menu">
            <a href="./" className="nav-link active">
              Home
            </a>
            <a href="./tictactoe.html" className="nav-link">
              Tic Tac Toe
            </a>
          </nav>
        </header>

        <main className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Welcome back</span>
            <h1>Landing page restored with motion and menu links</h1>
            <p>
              Your home experience is back. Use the menu to open the static Tic Tac Toe page,
              then return here anytime with the built-in home link.
            </p>
            <div className="hero-actions">
              <a href="./tictactoe.html" className="primary-button">
                Play Tic Tac Toe
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="bouncing-container">
              <span className="ball ball-1" />
              <span className="ball ball-2" />
              <span className="ball ball-3" />
              <span className="ball ball-4" />
              <span className="ball ball-5" />
            </div>
            <div className="hero-card">
              <h2>Fast static preview</h2>
              <p>Use the static page for quick play, while the Next.js landing page remains your home.</p>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .homepage {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 30px;
        }

        .site-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1100px;
          width: 100%;
          margin: 0 auto 28px;
          padding: 0 12px;
          animation: slideInDown 0.8s ease;
        }

        .brand {
          font-size: 1.1rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #38bdf8;
          font-weight: 700;
        }

        .nav-menu {
          display: flex;
          gap: 18px;
        }

        .nav-link {
          color: rgba(230, 238, 246, 0.8);
          text-decoration: none;
          padding: 10px 14px;
          border-radius: 999px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 32px;
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          animation: fadeIn 1s ease;
        }

        .hero-copy {
          animation: slideInUp 0.8s ease both;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(6, 182, 212, 0.12);
          color: #38bdf8;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        h1 {
          font-size: clamp(2.4rem, 4vw, 4rem);
          line-height: 1.05;
          margin: 0 0 18px;
          max-width: 640px;
        }

        p {
          max-width: 640px;
          line-height: 1.75;
          color: rgba(230, 238, 246, 0.8);
          margin-bottom: 28px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .primary-button {
          display: inline-block;
          padding: 16px 28px;
          color: white;
          background: linear-gradient(135deg, #06b6d4, #38bdf8);
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(6, 182, 212, 0.22);
        }

        .hero-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          animation: slideInUp 0.9s ease 0.2s both;
        }

        .hero-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
          text-align: center;
        }

        .hero-card h2 {
          margin: 0 0 10px;
          font-size: 1.4rem;
        }

        .hero-card p {
          margin: 0;
          color: rgba(230, 238, 246, 0.76);
        }

        .bouncing-container {
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 18px;
        }

        .ball {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: inline-block;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.24);
        }

        .ball-1 { background: linear-gradient(135deg, #ff006e, #ff1493); animation-name: bounce1; }
        .ball-2 { background: linear-gradient(135deg, #00d4ff, #0099ff); animation-name: bounce2; }
        .ball-3 { background: linear-gradient(135deg, #00ff88, #00cc66); animation-name: bounce3; }
        .ball-4 { background: linear-gradient(135deg, #ffb700, #ff8c00); animation-name: bounce4; }
        .ball-5 { background: linear-gradient(135deg, #b700ff, #8b5cf6); animation-name: bounce5; }

        .ball-1, .ball-2, .ball-3, .ball-4, .ball-5 {
          animation-duration: 0.85s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @media (max-width: 900px) {
          .hero-section {
            display: block;
          }

          .hero-visual {
            align-items: stretch;
          }
        }

        @media (max-width: 640px) {
          .site-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
          }

          .nav-menu {
            width: 100%;
            justify-content: flex-start;
            flex-wrap: wrap;
          }

          h1 {
            font-size: 2.6rem;
          }
        }
      `}</style>
    </>
  );
}
