import type { Metadata } from 'next'

// meta data is an object which is
// meta data is comign form next js
export const metadata: Metadata = {
    title:"Auth in Next js",
    description:"my firt Next js Authentication" 
}


// children is in props here
// it is read only type
// in read only their is children which is reac node
export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
