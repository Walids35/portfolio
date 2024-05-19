import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  applicationName: "Walid Siala Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ['walid', "siala", "walid siala", "portfolio", "walid siala portfolio", "software developer", "developer", "tunisia"],
  title: "Walid Siala's Portfolio",
  creator: "Walid Siala",
  publisher: "Walid Siala",
  description: "Hi I'm Walid Siala. A passionate software engineer, based in Tunisia, that designs, develops, and maintains computer programs and systems, utilizing my expertise in coding, problem-solving, and algorithmic thinking to create innovative software solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://portfolio-sand-delta-38.vercel.app/"),
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category:"Technology"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
