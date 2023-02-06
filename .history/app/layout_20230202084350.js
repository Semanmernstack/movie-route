import Tv from "./components/Tv";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Tv/>
        {children}</body>
    </html>
  )
}
