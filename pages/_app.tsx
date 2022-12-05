import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { InjectedConnector } from 'wagmi/connectors/injected'

// Import CELO chain information
import { Alfajores, Celo } from '@celo/rainbowkit-celo/chains'

const { chains } = configureChains(
  [Alfajores, Celo],
  [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
)

import { publicProvider } from 'wagmi/providers/public'

const { provider, webSocketProvider } = configureChains(chains, [
  publicProvider(),
])

import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

const injected = new InjectedConnector({ chains })
const metamask = new MetaMaskConnector({ chains })
const client = createClient({
  provider,
  webSocketProvider,
  connectors: [injected],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}
