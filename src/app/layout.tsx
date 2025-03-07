import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Grønnskalle',
    default: 'Grønnskalle - Green Code for a Sustainable Future',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Grønnskalle Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-emerald-950 bg-emerald-50/30 antialiased">{children}</body>
    </html>
  )
}
