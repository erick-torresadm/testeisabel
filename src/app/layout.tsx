import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maison Fandim | Clínica de Estética de Luxo',
  description: 'Experiência única em estética e bem-estar. Tratamentos personalizados com excelência, tecnologia e sofisticação. Agende sua avaliação.',
  keywords: 'clínica estética, estética de luxo, tratamentos faciais, tratamentos corporais, botox, preenchimento, Brasília, Fandim',
  openGraph: {
    title: 'Maison Fandim | Clínica de Estética de Luxo',
    description: 'Experiência única em estética e bem-estar. Tratamentos personalizados com excelência.',
    url: 'https://maisonfandim.com',
    siteName: 'Maison Fandim',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
