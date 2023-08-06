import './globals.css'
import { montserrat } from '@/styles/fonts'


export const metadata = {
  title: 'Ceridwen Portfolio',
  description: 'Webdeveloper and design portfolio Ceridwen Roberts',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`} 
      // style={{
        // display: "flex",
        // flexWrap: "wrap",
        // alignContent: "center"}}
        >{children}</body>
    </html>
  )
}
