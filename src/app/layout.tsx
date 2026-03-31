import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maison Fandim | Clínica de Estética Premium',
  description: 'Experiência única em estética e bem-estar. Tratamentos personalizados com excelência, tecnologia e sofisticação. Agende sua avaliação.',
  keywords: 'clínica estética, estética de luxo, tratamentos faciais, botox, preenchimento, Brasília, Fandim',
  openGraph: {
    title: 'Maison Fandim | Clínica de Estética Premium',
    description: 'Experiência única em estética e bem-estar.',
    url: 'https://maisonfandim.com',
    siteName: 'Maison Fandim',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
