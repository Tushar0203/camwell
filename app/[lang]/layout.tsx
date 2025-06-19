import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto, Montserrat } from 'next/font/google'
import DirectionProvider from "@/components/DirectionProvider";
import { Locale, getDictionary } from "@/lib/dictionary";
import { Providers } from "./providers";
import ScrollRestoration from "@/components/ScrollRestoration";

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

// Define params type as a Promise
type Params = Promise<{ lang: Locale }>;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  // Await the params Promise to get the lang value
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  // Get the dictionary for the current locale
  const dict = await getDictionary(lang);
  
  return (
    <html 
      lang={lang}
      suppressHydrationWarning 
      className={`${roboto.variable} ${montserrat.variable}`}
    >
      <body className="font-body" suppressHydrationWarning>
        <Providers lang={lang}>
          <ScrollRestoration />
          <DirectionProvider />
          <Navbar />
          <main className="w-full overflow-x-hidden">
            {children}
          </main>
          <Footer dictionary={dict.footer} />
        </Providers>
      </body>
    </html>
  )
} 