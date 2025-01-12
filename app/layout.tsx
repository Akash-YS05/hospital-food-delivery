import { Inter } from 'next/font/google'
import './globals.css'
import {Sidebar} from '@/components/ui/Sidebar'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="flex h-screen">
            {session && <Sidebar />}
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  )
}