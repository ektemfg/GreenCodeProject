'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Container } from '@/components/Container';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Heading, Lead } from '@/components/Text';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { Link } from '@/components/Link';

export default function AiChatPage() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative overflow-hidden bg-gradient-to-b from-emerald-800 to-emerald-950">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/green-background-poster.jpg"
        >
          <source src="/assets/green-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-emerald-950/30 z-10"></div>
        
        <Container className="relative z-20">
          <Navbar
            banner={
              <Link
                href="/blog"
                className="flex items-center gap-1 rounded-full bg-green-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-green-950/30"
              >
                Latest sustainable coding practices
                <ChevronRightIcon className="size-4" />
              </Link>
            }
            whiteLogo={true}
          />
          
          <div className="pt-16 pb-12">
            <h1 className="font-mono text-3xl/[0.9] font-medium tracking-tight text-balance text-white sm:text-5xl/[0.8]">
              AI Code Practice Assistant
            </h1>
            <p className="mt-6 max-w-2xl text-xl/7 font-medium text-white/90">
              Get expert advice on sustainable coding practices and optimize your code for environmental impact.
            </p>
          </div>
        </Container>
      </div>

      <main className="flex-1 bg-gradient-to-b from-emerald-50 to-white">
        <Container className="py-12">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl bg-white/90 p-6 ring-1 shadow-xl ring-emerald-100 backdrop-blur-sm">
              <div className="h-[45vh] overflow-y-auto mb-6 space-y-4 scrollbar-thin scrollbar-thumb-emerald-200 scrollbar-track-transparent">
                {messages.length === 0 ? (
                  <div className="text-center text-emerald-600 mt-8">
                    Ask me anything about sustainable coding practices and environmental impact!
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-emerald-50 ml-auto max-w-[80%] text-emerald-900'
                          : 'bg-white mr-auto max-w-[80%] text-emerald-800 ring-1 ring-emerald-100'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="bg-white p-4 rounded-2xl mr-auto max-w-[80%] ring-1 ring-emerald-100">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about sustainable coding practices..."
                  className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 border-emerald-200 bg-white/80 backdrop-blur-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
} 