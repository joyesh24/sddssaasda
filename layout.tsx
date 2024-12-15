import type { Metadata } from 'next'
import { Noto_Serif_Bengali } from 'next/font/google'
import './globals.css'
import 'nprogress/nprogress.css'

const notoSerifBengali = Noto_Serif_Bengali({ 
  subsets: ['bengali'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Atdapunia High School',
  description: 'Official website of Atdapunia High School',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <head>
        <style>{`
          #nprogress .bar {
            background: #00A3FF !important;
            height: 4px !important;
          }
          #nprogress .peg {
            box-shadow: 0 0 10px #00A3FF, 0 0 5px #00A3FF !important;
          }
          #nprogress .spinner-icon {
            border-top-color: #00A3FF !important;
            border-left-color: #00A3FF !important;
          }
        `}</style>
      </head>
      <body className={notoSerifBengali.className}>{children}</body>
    </html>
  )
}

