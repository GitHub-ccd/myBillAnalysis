import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>myBillAnalysis</title>
        <meta name="description" content="Main app landing page for myBillAnalysis" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="page">
        <div className="card">
          <h1>Welcome to myBillAnalysis</h1>
          <p>This is the main Next.js app. Use the button below to open the static single page Tic Tac Toe app.</p>
          <Link href="/tictactoe.html" className="button">
            Open static Tic Tac Toe page
          </Link>
        </div>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: #f5f5f5;
        }

        .card {
          max-width: 540px;
          width: 100%;
          background: white;
          padding: 32px;
          border-radius: 18px;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.08);
          text-align: center;
        }

        h1 {
          margin-bottom: 16px;
          color: #111827;
        }

        p {
          margin-bottom: 28px;
          color: #4b5563;
          line-height: 1.7;
        }

        .button {
          display: inline-block;
          padding: 14px 28px;
          background: #2563eb;
          color: white;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.2s ease;
        }

        .button:hover {
          background: #1d4ed8;
        }
      `}</style>
    </>
  );
}
