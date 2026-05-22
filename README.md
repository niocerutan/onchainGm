# 🌅 onchainGM

Say **Good Morning** on the [Arc blockchain](https://arc.network). Every GM is stored permanently on-chain — instant finality, near-zero gas (paid in USDC).

**Live demo:** _deploy to Cloudflare Pages and paste URL here_

---

## What's inside

```
onchainGm/
├── contracts/          ← Smart contract (Hardhat + Solidity)
│   ├── contracts/GM.sol        ← The GM contract
│   └── scripts/deploy.js       ← Deployment script
└── frontend/           ← React website (Vite + Wagmi + RainbowKit)
    └── src/
        ├── wagmi.ts            ← Arc chain config
        ├── constants.ts        ← Contract ABI & address
        ├── App.tsx             ← Main layout
        └── components/
            ├── Header.tsx      ← Wallet connect button
            ├── SendGm.tsx      ← Say GM form
            ├── GmFeed.tsx      ← On-chain GM feed
            └── Stats.tsx       ← Total GMs counter
```

## Arc Testnet details

| Field        | Value                              |
|--------------|------------------------------------|
| Chain ID     | `5042002`                          |
| RPC          | `https://rpc.testnet.arc.network`  |
| Explorer     | `https://testnet.arcscan.app`      |
| Gas token    | USDC                               |
| Faucet       | `https://faucet.circle.com`        |

---

## Setup guide (step by step)

### Prerequisites
- [Node.js](https://nodejs.org) v18 or later
- [MetaMask](https://metamask.io) browser extension
- A free [WalletConnect Cloud](https://cloud.walletconnect.com) project ID

### 1. Clone the repo

```bash
# "git clone" downloads a copy of the project to your computer
git clone https://github.com/YOUR_USERNAME/onchainGm.git
cd onchainGm
```

### 2. Deploy the smart contract

```bash
# Go into the contracts folder
cd contracts

# Install dependencies (downloads the tools listed in package.json)
npm install

# Copy the env template and add your MetaMask private key
cp .env.example .env
# Now open .env and fill in: PRIVATE_KEY=0xYOURKEY
# (MetaMask → click account → Account Details → Export Private Key)

# Compile the contract to check for errors
npm run compile

# Deploy to Arc Testnet — you need testnet USDC from faucet.circle.com
npm run deploy:testnet
```

The deploy script will print:
```
✅ GM contract deployed!
📍 Contract address: 0xABC...
VITE_GM_CONTRACT_ADDRESS=0xABC...
```

Copy that address for the next step.

### 3. Run the frontend

```bash
# Go into the frontend folder
cd ../frontend

# Install dependencies
npm install

# Copy env template
cp .env.example .env.local

# Fill in .env.local:
#   VITE_GM_CONTRACT_ADDRESS=0xABC...   ← paste from deploy step
#   VITE_WALLETCONNECT_PROJECT_ID=...   ← from cloud.walletconnect.com

# Start the local dev server
npm run dev
```

Open **http://localhost:5173** — connect MetaMask to Arc Testnet, click "Say GM"!

---

## Deploy to Cloudflare Pages

```bash
# Build the static site
cd frontend
npm run build

# The output is in frontend/dist/
# Upload that folder to Cloudflare Pages (see below)
```

**Cloudflare Pages setup:**
1. Push this repo to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create a project
3. Connect your GitHub repo
4. Set **Build command:** `npm run build`
5. Set **Build output directory:** `dist`
6. Set **Root directory:** `frontend`
7. Add environment variables:
   - `VITE_GM_CONTRACT_ADDRESS` = your deployed contract address
   - `VITE_WALLETCONNECT_PROJECT_ID` = your WalletConnect project ID
8. Click Deploy!

---

## Adding MetaMask to Arc Testnet

MetaMask won't know about Arc Testnet until you add it. Either:

- Click "Connect Wallet" in the app — RainbowKit will prompt you to add the network automatically, **or**
- Add manually in MetaMask: **Settings → Networks → Add Network**
  - Network name: `Arc Testnet`
  - RPC URL: `https://rpc.testnet.arc.network`
  - Chain ID: `5042002`
  - Currency symbol: `USDC`
  - Explorer: `https://testnet.arcscan.app`

---

## Tech stack

| Tool | Purpose |
|------|---------|
| [Solidity](https://soliditylang.org) | Smart contract language |
| [Hardhat](https://hardhat.org) | Contract compile & deploy |
| [React](https://react.dev) + [Vite](https://vite.dev) | Frontend framework |
| [wagmi v2](https://wagmi.sh) | React hooks for blockchain |
| [viem](https://viem.sh) | Low-level Ethereum library |
| [RainbowKit](https://rainbowkit.com) | Wallet connect UI |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Cloudflare Pages](https://pages.cloudflare.com) | Hosting |

---

Built with ☀️ on [Arc Network](https://arc.network)
