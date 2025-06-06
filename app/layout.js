import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto, Montserrat } from 'next/font/google'

// Load Roboto font for body text
const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body'
})

// Load Montserrat font for headings
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading'
})

export const metadata = {
  title: 'Camwell Industries',
  description: 'High-security fencing solutions for government and defense',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${roboto.variable} ${montserrat.variable}`}>
      <body className="font-body" suppressHydrationWarning>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
