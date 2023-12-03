import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'

const lato = Lato({weight: ['100','300','400','700','900'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Genesis App',
  description: 'Genesis CHMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
