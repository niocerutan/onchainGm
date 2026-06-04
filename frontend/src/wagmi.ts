import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { defineChain } from "viem";

// Robinhood Testnet — custom chain definition
// Chain ID: 46630 | RPC: rpc.testnet.chain.robinhood.com | Explorer: explorer.testnet.chain.robinhood.com
export const arcTestnet = defineChain({
  id: 46630,
  name: "Robinhood Testnet",
  nativeCurrency: {
    name: "USDC",
    symbol: "USDC",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.chain.robinhood.com"] },
  },
  blockExplorers: {
    default: {
      name: "Robinhood Explorer",
      url: "https://explorer.testnet.chain.robinhood.com",
    },
  },
  testnet: true,
});

// wagmi config — connects RainbowKit wallets to Arc network
// WalletConnect projectId: get a free one at https://cloud.walletconnect.com
export const wagmiConfig = getDefaultConfig({
  appName: "onchainGM",
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || "demo",
  chains: [arcTestnet],
  ssr: false,
});
