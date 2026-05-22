import { useState } from "react";
import { Header } from "./components/Header";
import { SendGm } from "./components/SendGm";
import { GmFeed } from "./components/GmFeed";
import { Stats } from "./components/Stats";

export default function App() {
  // Bump this number whenever a GM is sent to trigger feed refresh
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="min-h-screen bg-[#080b14]">
      {/* Background glow orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb absolute top-[-200px] left-[10%] w-[600px] h-[600px] rounded-full bg-[#00d4aa]/5 blur-[120px]" />
        <div className="glow-orb absolute bottom-[-100px] right-[5%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      <Header />

      <main className="relative z-10 max-w-xl mx-auto px-4 py-8">
        {/* Hero section */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🌅</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Say <span className="text-[#00d4aa]">GM</span> on-chain
          </h1>
          <p className="text-slate-400 text-base max-w-sm mx-auto">
            Every GM is stored on the{" "}
            <a
              href="https://testnet.arcscan.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00d4aa] hover:underline"
            >
              Arc blockchain
            </a>
            . Fast, cheap, and permanent.
          </p>
        </div>

        {/* Stats row */}
        <Stats />

        {/* Send GM card */}
        <div className="mb-6">
          <SendGm onSuccess={() => setRefreshKey((k) => k + 1)} />
        </div>

        {/* GM Feed */}
        <GmFeed refreshKey={refreshKey} />

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-slate-600 space-y-1">
          <p>
            Built on{" "}
            <a href="https://arc.network" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">
              Arc Network
            </a>{" "}
            · Chain ID 5042002
          </p>
          <p>
            <a
              href="https://testnet.arcscan.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400"
            >
              View explorer
            </a>
            {" · "}
            <a
              href="https://faucet.circle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400"
            >
              Get testnet USDC
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
