import { i18n } from '@/lib/i18n-config';
import { redirect } from 'next/navigation';

// Root layout for the non-localized routes
// This shouldn't do anything except render children
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Return only the children without wrapping in html/body tags
  // to avoid nesting html inside html which causes hydration errors
  return children;
} 