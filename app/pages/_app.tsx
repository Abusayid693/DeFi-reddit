import type { AppProps } from 'next/app'
import { ClientWalletProvider } from '../contexts/useWallet'
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientWalletProvider>
      <Component {...pageProps} />
    </ClientWalletProvider>
  )
}

export default MyApp
