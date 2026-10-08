import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ServiceWorkerRegister } from '@/components/service-worker-register'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'ZIMPLAY ZW — Zimbabwe Music Streaming',
  description:
    'Stream the sound of Zimbabwe. Sungura, Zimdancehall, Mbira, Afro Jazz and more — upload and play Zimbabwean music on ZIMPLAY ZW.',
  applicationName: 'ZIMPLAY ZW',
  generator: 'v0.app',
  appleWebApp: {
    capable: true,
    title: 'ZIMPLAY',
    statusBarStyle: 'black',
  },
  icons: {
    icon: [{ url: '/zimplay-icon.svg', type: 'image/svg+xml' }],
    apple: '/zimplay-icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <ServiceWorkerRegister />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
