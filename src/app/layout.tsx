import './globals.css'

export const metadata = {
  title: 'Chat Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ height: '100vh' }}>{children}</body>
    </html>
  )
}
