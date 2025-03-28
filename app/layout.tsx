import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Football Match Predictions',
  description: 'Statistical analysis of football match outcomes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  )
}