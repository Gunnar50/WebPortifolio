"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
        </body>
    </html>
  )
}
