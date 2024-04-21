export const metadata = {
  title: "Pizza - a concept by WebKom",
  description: "Pizza calculator for Webkom",
};


import "./layout.css";
import NavBar from "@/components/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
