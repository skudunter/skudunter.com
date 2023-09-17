import './globals.css'
import NavigationBar from './components/navigationBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skudunters place on the web',
  description: 'My Home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-primary font-Roboto'>
        <NavigationBar/>
        {children}</body>
    </html>
  )
}
