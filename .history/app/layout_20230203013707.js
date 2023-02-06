import Tv from "./components/Tv";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="">
        <Tv/>
        {children}</body>
    </html>
  )
}
