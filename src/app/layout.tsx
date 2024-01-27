export const metadata = {
  title: 'Pizza - a concept by WebKom',
  description: 'Pizza calculator for Webkom',
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
