import { ConnectButton } from '@rainbow-me/rainbowkit'
import Head from 'next/head'
import Image from 'next/image'
import { useConnect } from 'wagmi'
import { WalletModal } from '../components/WalletModal'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  return (
    <div className={styles.container}>
      <WalletModal />
      <button onClick={() => connect()}> conectar</button>
    </div>
  )
}
