import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Code Practice Assistant - Grønnskalle',
  description: 'Get expert advice on sustainable coding practices, software optimization, and best practices for environmentally conscious development.',
}

export default function AiChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 