import "./styles/global.css"
import Tv from "./components/Tv";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="max-w-7xl mx-auto bg-red-300">
        <Tv/>
        {children}</body>
    </html>
  )
}
