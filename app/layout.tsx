import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NARDIHA Holdings | The Future of Web3 Gaming',
  description: 'NARDIHA Holdings is a global Web3 gaming and fintech conglomerate offering 7 integrated platforms: NFT gaming, DeFi wallets, phygital collectibles, and enterprise automation.',
  keywords: 'Web3 gaming, NFT marketplace, DeFi wallet, crypto gaming, blockchain games, phygital NFTs, NFT rental, AI trading bots, NARDIHA Holdings, play-to-earn, GameFi',
  authors: [{ name: 'NARDIHA Holdings' }],
  creator: 'NARDIHA Holdings',
  publisher: 'NARDIHA Holdings',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://nardihaholdings.com/',
    title: 'NARDIHA Holdings | The Future of Web3 Gaming',
    description: '7 integrated Web3 gaming and fintech platforms. One ecosystem. Unlimited possibilities.',
    siteName: 'NARDIHA Holdings',
    images: [
      {
        url: '/assets/aethon-divinum.jpeg',
        width: 1200,
        height: 630,
        alt: 'NARDIHA Holdings',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NARDIHA Holdings | The Future of Web3 Gaming',
    description: '7 integrated Web3 gaming and fintech platforms. One ecosystem. Unlimited possibilities.',
    images: ['/assets/aethon-divinum.jpeg'],
  },
  icons: {
    icon: '/assets/nardia-logo.jpeg',
    apple: '/assets/nardia-logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Corporation',
              name: 'NARDIHA Holdings',
              description: 'Global Web3 gaming and fintech conglomerate offering integrated blockchain platforms',
              url: 'https://nardihaholdings.com',
              logo: 'https://nardihaholdings.com/assets/nardia-logo.jpeg',
              sameAs: [
                'https://linkedin.com/company/nardihaholdings',
                'https://twitter.com/nardihaholdings',
              ],
              location: [
                {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Panama City',
                    addressCountry: 'Panama',
                  },
                },
                {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Wilmington',
                    addressRegion: 'Delaware',
                    addressCountry: 'United States',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
