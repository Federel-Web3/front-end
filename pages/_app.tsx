import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig } from 'wagmi'

import { chains, client } from '../libs/wamgi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
