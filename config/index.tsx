import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { cookieStorage, createStorage } from "wagmi";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

export const networks = [
  {
    id: 10266,
    name: "Monad Testnet",
    nativeCurrency: {
      name: "MON",
      symbol: "MON",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://monad-testnet.g.alchemy.com/v2/your-alchemy-api-key"]
      }
    },
    blockExplorers: {
      default: {
        name: "MonadScan",
        url: "https://testnet.monadscan.com"
      }
    }
  },
];

if (!projectId) throw new Error("Project ID is not defined");

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({ storage: cookieStorage }),
  ssr: true,
  networks,
  projectId
});

export const config = wagmiAdapter.wagmiConfig;
