import "../styles/globals.css"
import Tv from "./components/Tv";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="max-w-7xl mx-auto shadow-lg">
        <Tv/>
        {children}</body>
    </html>
  )
}
