import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kolej',
  description: 'Kolej',
  generator: 'Kolej',
  openGraph: {
    title: 'online Kolej',
		description:
			"Kolej - bu sizning o'qish yo'lingizni boshlash uchun eng yaxshi joy. Bizning onlayn platformamiz orqali siz o'zingizga mos ta'lim yo'nalishini tanlashingiz mumkin.",
		type: 'website',
    images: [
      {
        url: 'https://etimg.etb2bimg.com/photo/75729614.cms',
        width: 800,
        height: 600,
        alt: 'Kolej',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
