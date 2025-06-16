import { NextRequest, NextResponse } from 'next/server'
import type { Locale } from './lib/dictionary'
import { i18n } from './lib/i18n-config'

// List of all supported locales
export const locales: Locale[] = ['en', 'ar']
export const defaultLocale: Locale = 'en'

// Get the preferred locale from request headers
function getLocale(request: NextRequest): Locale {
  // Check if there's a cookie with the preferred locale
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale
  }

  // Check for Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const parsedLocales = acceptLanguage.split(',')
      .map(l => l.split(';')[0].trim())
      .filter(l => locales.some(supportedLocale => l.startsWith(supportedLocale)))
    
    if (parsedLocales.length > 0) {
      const detectedLocale = parsedLocales[0].substring(0, 2)
      if (locales.includes(detectedLocale as Locale)) {
        return detectedLocale as Locale
      }
    }
  }

  // Default to defaultLocale
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.') // Files (e.g. favicon.ico)
  ) {
    return NextResponse.next()
  }

  // Check if the pathname starts with our supported locales
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // For the root path, always redirect to default locale (English)
  if (pathname === '/') {
    const response = NextResponse.redirect(new URL(`/${defaultLocale}`, request.url))
    
    // Clear any existing locale cookies to ensure we always use the default
    response.cookies.delete('NEXT_LOCALE')
    response.cookies.set('NEXT_LOCALE', defaultLocale)
    
    return response
  }

  // For other paths, use the preferred locale from headers or cookies
  const locale = getLocale(request)
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  
  // Redirect to the locale-prefixed URL
  return NextResponse.redirect(newUrl)
} ``