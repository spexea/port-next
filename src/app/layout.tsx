import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus impedit sed ullam, enim rerum aliquam quis. Omnis dolore nobis mollitia aspernatur harum illo? Aut ipsam ratione non, praesentium omnis autem.",
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1" />
<body>{children}</body>
      </head>
      
    </html>
  )
}
