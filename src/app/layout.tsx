import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'GDSC USeP Obrero',
  description: 'Official website of Google Developer Student Clubs USeP Obrero chapter.',
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
