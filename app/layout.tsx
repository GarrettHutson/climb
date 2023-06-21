import './globals.css'


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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
