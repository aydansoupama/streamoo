import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WatchBox',
  // description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className}`} id={"top"}>
        {children}

        <Script src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></Script>
      </body>
    </html>
  )
}
