import "./globals.css";
import "./styles/navbar.css";
import Navbar from "@/components/Navbar";
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Camwell Industries',
  description: 'High-security fencing solutions for government and defense',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" /> */}
      </body>
    </html>
  )
}
