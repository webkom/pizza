export const metadata = {
  title: 'Pizza - a concept by WebKom',
  description: 'Pizza calculator for Webkom',
}
import NavBar from "@/components/Header"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <NavBar/> */ /* Mulig å legge til i stedet for at den er over alt */}
      <body>{children}</body>
    </html>
  )
}
