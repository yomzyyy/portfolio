"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Facebook, Instagram, Mail, ExternalLink, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { GlitchText } from "@/components/GlitchText";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const techStack = {
    all: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Supabase", "Vercel", "Git", "JavaScript", "TypeScript", "Firebase", "Tailwind CSS"],
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "Supabase", "Firebase"],
    tools: ["Git", "Vercel"]
  };

  const techLogos: { [key: string]: string } = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  };

  const techDescriptions: { [key: string]: string } = {
    "React": "JavaScript library for building user interfaces",
    "Next.js": "React framework for production",
    "Node.js": "JavaScript runtime for server-side development",
    "Express.js": "Web application framework for Node.js",
    "MongoDB": "NoSQL database for modern applications",
    "Supabase": "Open source Firebase alternative",
    "Vercel": "Platform for frontend frameworks and static sites",
    "Git": "Distributed version control system",
    "JavaScript": "Programming language for web development",
    "TypeScript": "Typed superset of JavaScript for scalable applications",
    "Firebase": "Google's app development platform",
    "Tailwind CSS": "Utility-first CSS framework"
  };

  const projects = [
    {
      title: "E-commerce PWA",
      description: "High-performance Progressive Web App with offline capabilities",
      performanceMetrics: {
        performance: 98,
        accessibility: 100,
        seo: 100
      },
      technicalImplementation: [
        "Service Worker implementation",
        "IndexedDB for offline data",
        "Streaming SSR",
        "Dynamic code splitting"
      ],
      image: "/project1.jpg",
      link: "#"
    },
    {
      title: "Real-time Collaboration Platform",
      description: "WebSocket-based platform with conflict resolution",
      performanceMetrics: {
        performance: 95,
        accessibility: 98,
        seo: 100
      },
      technicalImplementation: [
        "WebSocket optimization",
        "CRDT implementation",
        "Custom state management",
        "WebRTC integration"
      ],
      image: "/project2.jpg",
      link: "#"
    }
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise applications"
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Built responsive web applications for clients"
    },
    {
      title: "Junior Developer",
      company: "Startup Co.",
      period: "2019 - 2020",
      description: "Developed and maintained company websites"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-black dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
            Jerome
          </a>
          <div className="flex items-center gap-8">
            <a href="#tech-stack" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              Tech Stack
            </a>
            <a href="#featured-projects" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              Featured Projects
            </a>
            <a href="#get-in-touch" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              Get in Touch
            </a>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-16 space-y-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center min-h-[85vh] md:min-h-[90vh] py-20 md:py-24 lg:py-32">
          {/* LEFT COLUMN - Profile Image */}
          <div className="relative mx-auto md:mx-0 order-1 md:order-none animate-fadeIn">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-zinc-200/80 dark:border-zinc-700/80 shadow-xl shadow-zinc-200/50 dark:shadow-zinc-900/50 ring-1 ring-zinc-100 dark:ring-zinc-800 transition-transform duration-500 hover:scale-105">
              <img
                src="/profile.jpg"
                alt="Jerome Magbanua"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Text Content */}
          <div className="space-y-8 md:space-y-10 text-center md:text-left order-2 md:order-none animate-fadeIn" style={{ animationDelay: '150ms' }}>
            {/* Name with Glitch Effect */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-black dark:text-white">
                Ernest{" "}
                <GlitchText text="Jerome" />
                {" "}M. Magbanua
              </h1>
            </div>

            {/* Subtitle and Description */}
            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
                Full-Stack Developer
              </p>
              <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-500 max-w-xl leading-relaxed mx-auto md:mx-0">
                Crafting end-to-end web solutions that stay fast, scalable, and responsive in real time.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              <a href="https://github.com/yomzyyy" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/magbanuajerome/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.facebook.com/MaelStrong.18" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" aria-label="Facebook Profile">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/yomz.ej/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" aria-label="Instagram Profile">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>


        <section id="tech-stack" className="space-y-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">Tech Stack</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            {Object.entries(techStack).map(([key, technologies]) => (
              <TabsContent key={key} value={key} className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {technologies.map((tech, index) => (
                    <Card
                      key={tech}
                      className="animate-fadeIn transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                        {techLogos[tech] && (
                          <img
                            src={techLogos[tech]}
                            alt={tech}
                            className={`w-16 h-16 object-contain transition-all duration-300 hover:scale-110 ${
                              tech === "Express.js" || tech === "Vercel" ? "dark:invert" : ""
                            }`}
                          />
                        )}
                        <div className="text-center space-y-2">
                          <h3 className="text-base font-semibold text-black dark:text-white">{tech}</h3>
                          {techDescriptions[tech] && (
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                              {techDescriptions[tech]}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

 
        <section id="featured-projects" className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-black dark:text-white">Featured Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Column - Content */}
                  <div className="p-8 md:p-12 space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-base">
                        {project.description}
                      </p>
                    </div>

                    {/* Technical Implementation */}
                    <div className="space-y-4 pt-4">
                      <h4 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wide">
                        Technical Implementation
                      </h4>
                      <ul className="space-y-3">
                        {project.technicalImplementation.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">▸</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Image/Screenshot */}
                  <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800 p-8 md:p-12 flex items-center justify-center min-h-[400px]">
                    <div className="relative w-full h-full max-h-[500px] bg-zinc-900 dark:bg-zinc-950 rounded-xl shadow-2xl overflow-hidden">
                      {/* Gradient overlay for modern look */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10"></div>

                      {/* Code screenshot placeholder */}
                      <div className="relative w-full h-full flex items-center justify-center p-8 backdrop-blur-sm">
                        <div className="text-center space-y-3">
                          <code className="text-blue-400 dark:text-blue-300 text-sm font-mono block">// Project Screenshot</code>
                          <code className="text-zinc-400 dark:text-zinc-500 text-xs font-mono block">Add your code screenshot here</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.title} className="relative border-l-2 border-zinc-200 pl-8 dark:border-zinc-800">
                <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-black dark:bg-white" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-black dark:text-white">{exp.title}</h3>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{exp.company}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">{exp.period}</p>
                  <p className="text-zinc-600 dark:text-zinc-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section id="get-in-touch" className="space-y-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Request Resume</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    Interested in my work? Download my resume to learn more about my experience and skills.
                  </p>
                  <Button size="lg" className="w-full">
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://github.com/yomzyyy" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/magbanuajerome/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.facebook.com/MaelStrong.18" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/yomz.ej/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              &copy; 2025 Jerome Magbanua. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
