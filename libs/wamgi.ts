import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { InjectedConnector } from 'wagmi/connectors/injected'
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
// Import CELO chain information
import { Alfajores, Celo } from '@celo/rainbowkit-celo/chains'

import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  omniWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'

export const { chains } = configureChains(
  [Alfajores, Celo],
  [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
)

import { publicProvider } from 'wagmi/providers/public'

const { provider, webSocketProvider } = configureChains(chains, [
  publicProvider(),
])

import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

// Import known recommended wallets
import { Valora, CeloWallet, CeloDance } from '@celo/rainbowkit-celo/wallets'

const injected = new InjectedConnector({ chains })
const metamask = new MetaMaskConnector({ chains })
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended with CELO',
    wallets: [metaMaskWallet({ chains })],
  },
])

export const client = createClient({
  provider,
  webSocketProvider,
  connectors,
})
