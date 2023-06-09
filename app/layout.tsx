import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-purple-800 max-w-screen flex justify-center flex-col overflow-x-hidden`}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
