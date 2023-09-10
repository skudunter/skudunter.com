import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import NavigationBar from './components/NavigationBar'
export const metadata: Metadata = {
  title: 'HomePage',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavigationBar/>
        {children}</body>
    </html>
  )
}
