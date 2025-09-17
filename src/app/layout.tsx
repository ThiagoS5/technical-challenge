import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import type { Metadata, Viewport } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Liva',
  description: 'AAAAAA',
  icons: {
    icon: '/liva-icon-removebg.png',
  },
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
