import './globals.css'
import Nav from './components/Nav'
import {
  ClerkProvider,

} from '@clerk/nextjs'

export const metadata = {
  title: 'Beta-Data',
  description: 'Share Beta. Send Rigs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">

        <body>
          <Nav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
