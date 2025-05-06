"use client";

import Image from 'next/image';
import Link from 'next/link';

// Project data
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS. Features responsive design, dark mode, and smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yourusername/portfolio",
    preview: "https://your-portfolio-url.com"
  },
  {
    title: "Markdown Editor",
    description: "A real-time markdown editor built with React and TypeScript. Features live preview, syntax highlighting, and responsive design.",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    link: "https://github.com/shreyaseemondal/markdown-editoooor.git",
    preview: "https://markdown-editor-rosy-six.vercel.app"
  }
];

const ProjectThumbnail = ({ title, previewUrl }: { title: string; previewUrl: string }) => (
  <a 
    href={previewUrl}
    target="_blank"
    rel="noopener noreferrer" 
    className="relative h-48 w-full bg-gradient-to-br from-[#3A0519] to-[#670D2F] flex items-center justify-center overflow-hidden group block"
  >
    <div className="absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-125">
      <div className="absolute top-4 left-4 w-24 h-24 bg-[#EBE8DB] rounded-full blur-xl"></div>
      <div className="absolute bottom-4 right-4 w-32 h-32 bg-[#EBE8DB] rounded-full blur-xl"></div>
    </div>
    <div className="absolute inset-0 bg-[#3A0519]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
      <div className="text-center transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="text-[#EBE8DB] text-xl font-bold mb-3">{title}</h4>
        <span className="text-[#EBE8DB] text-sm font-medium px-4 py-2 rounded-full border border-[#EBE8DB]">
          View Project
        </span>
      </div>
    </div>
  </a>
);

export default function Projects() {
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
          <Link 
            href="/" 
            className="inline-flex items-center text-[#EBE8DB]/90 hover:text-[#EBE8DB] mb-8 transition-colors"
            prefetch={true}
            passHref
            role="button"
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
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            My Projects
          </h1>
          <p className="text-lg text-[#EBE8DB]/90 max-w-2xl animate-fade-in animate-delay-100">
            Here's a collection of projects I've worked on. Each project represents my skills
            and passion for creating meaningful web experiences.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <article 
                key={project.title}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <ProjectThumbnail title={project.title} previewUrl={project.preview} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#3A0519] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#3A0519]/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-[#3A0519]/10 text-[#3A0519] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#3A0519] hover:text-[#3A0519]/80 transition-colors"
                    >
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 