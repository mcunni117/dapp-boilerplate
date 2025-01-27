import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_W3C_PID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'example dApp',
  description: 'example dApp description',
  url: 'http://localhost:3000/', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [mainnet, polygon] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})