import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import { QueryProvider } from '@/providers/query-provider'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <QueryProvider>
          {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}