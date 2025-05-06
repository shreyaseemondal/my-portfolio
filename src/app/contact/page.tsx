"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#EBE8DB]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#3A0519] to-[#670D2F] text-[#EBE8DB] py-20 px-4 relative overflow-hidden">
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' stroke='%23ffffff' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0',
            animation: 'patternMove 60s linear infinite'
          }}
        />
        <div className="container mx-auto max-w-6xl">
          <button 
            onClick={() => router.push('/')}
            className="inline-flex items-center text-[#EBE8DB]/90 hover:text-[#EBE8DB] mb-8 transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            <span>Back to Home</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Contact Me
          </h1>
          <p className="text-lg text-[#EBE8DB]/90 max-w-2xl animate-fade-in animate-delay-100">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <form className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#3A0519] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-[#3A0519]/20 focus:border-[#3A0519] focus:ring-1 focus:ring-[#3A0519] outline-none transition-colors text-[#3A0519]"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#3A0519] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-[#3A0519]/20 focus:border-[#3A0519] focus:ring-1 focus:ring-[#3A0519] outline-none transition-colors text-[#3A0519]"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#3A0519] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-[#3A0519]/20 focus:border-[#3A0519] focus:ring-1 focus:ring-[#3A0519] outline-none transition-colors resize-none text-[#3A0519]"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3A0519] to-[#670D2F] text-[#EBE8DB] py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Additional Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-[#3A0519] mb-4">Other Ways to Connect</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:mshreyasee16@gmail.com"
                className="text-[#3A0519] hover:text-[#670D2F] transition-colors flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
                </svg>
                <span className="text-sm font-medium">mshreyasee16@gmail.com</span>
              </a>
              <a
                href="tel:+917044492244"
                className="text-[#3A0519] hover:text-[#670D2F] transition-colors flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                  <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"/>
                </svg>
                <span className="text-sm font-medium">+91 7044492244</span>
              </a>
              <a
                href="https://github.com/shreyaseemondal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A0519] hover:text-[#670D2F] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/shreyaseemondal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A0519] hover:text-[#670D2F] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 