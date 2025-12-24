"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Facebook, Instagram, Mail, ExternalLink, Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { GlitchText } from "@/components/GlitchText";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSwanImageIndex, setCurrentSwanImageIndex] = useState(0);

  const projectImages = [
    '/jais-kitchenette/jaiskitchenette.png',
    '/jais-kitchenette/jaiskitchenette1.png',
    '/jais-kitchenette/jaiskitchenette2.png',
    '/jais-kitchenette/jaiskitchenette3.png'
  ];

  const swanImages = [
    '/swan-shipping/swan01.png',
    '/swan-shipping/swan02.png',
    '/swan-shipping/swan03.png',
    '/swan-shipping/swan04.png'
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [projectImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSwanImageIndex((prev) => (prev + 1) % swanImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [swanImages.length]);

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
      title: "Restaurant Management & Ordering System",
      description: "Full-stack web application for restaurant operations featuring real-time inventory tracking, order management, and customer ordering portal with integrated authentication and admin controls.",
      techStack: [
        { name: "Next.js", color: "blue" },
        { name: "MongoDB", color: "green" },
        { name: "Express.js", color: "purple" },
        { name: "Tailwind CSS", color: "cyan" }
      ],
    
      technicalImplementation: [
        "Next.js 15 (React + TypeScript) with Server-Side Rendering and Turbopack for optimized performance",
        "Express.js REST API with MongoDB/Mongoose for scalable data persistence and GridFS for image storage",
        "Admin dashboard with real-time stock management, product catalog controls, and order workflow automation",
        "Advanced inventory system with low-stock alerts, expiration tracking, and batch adjustment capabilities",
        "Senior citizen discount verification system with document upload and approval workflow"
      ],
      image: "/project1.jpg",
      link: "https://www.jaiskitchenette.shop/"
    },
    {
      title: "SWAN Shipping Management System",
      description: "Full-stack web application for maritime shipping operations featuring comprehensive admin CMS, dynamic content management, and public-facing website with hero carousel, news articles, fleet showcase, and career portal integration.",
      techStack: [
        { name: "MongoDB", color: "green" },
        { name: "Express.js", color: "purple" },
        { name: "React", color: "blue" },
        { name: "Node.js", color: "green" }
      ],
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
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "November 2025 - Present",
      description: "Developing full-stack web applications for clients including restaurant management systems, shipping company websites with CMS integration, and custom business solutions using Next.js, MongoDB, Express.js, and modern web technologies"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="relative mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-black dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
              Jerome
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
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

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-full"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-lg">
              <div className="mx-auto max-w-6xl px-6 py-4 space-y-4">
                <a
                  href="#tech-stack"
                  className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tech Stack
                </a>
                <a
                  href="#featured-projects"
                  className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Featured Projects
                </a>
                <a
                  href="#get-in-touch"
                  className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          )}
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
          </div>
        </section>


        <section id="tech-stack" className="space-y-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">Tech Stack</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 h-auto">
              <TabsTrigger value="all" className="text-xs sm:text-sm px-2 py-2">All</TabsTrigger>
              <TabsTrigger value="frontend" className="text-xs sm:text-sm px-2 py-2">Frontend</TabsTrigger>
              <TabsTrigger value="backend" className="text-xs sm:text-sm px-2 py-2">Backend</TabsTrigger>
              <TabsTrigger value="database" className="text-xs sm:text-sm px-2 py-2">Database</TabsTrigger>
              <TabsTrigger value="tools" className="text-xs sm:text-sm px-2 py-2">Tools</TabsTrigger>
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
          <h2 className="text-3xl font-bold text-black dark:text-white">Featured Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
                  {/* Left Column - Content */}
                  <div className="relative p-6 md:p-8 pb-12 md:pb-16 space-y-4 flex items-start pt-8 md:pt-12">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 md:mb-8">
                          {project.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map((tech) => {
                          const colorClasses: Record<string, string> = {
                            blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
                            green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
                            purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
                            cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
                            red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                          };
                          return (
                            <span
                              key={tech.name}
                              className={`px-3 py-1 text-xs font-medium rounded-full ${colorClasses[tech.color]}`}
                            >
                              {tech.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Image/Screenshot */}
                  <div className="group relative w-full h-full bg-zinc-900 dark:bg-zinc-950 overflow-hidden flex items-center justify-center">
                    {index === 0 ? (
                      // First project - Jai's Kitchenette rotating images
                      <div className="relative w-full h-full">
                        <img
                          src={projectImages[currentImageIndex]}
                          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover transition-opacity duration-500"
                        />
                        {/* Visit Site button */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <Button
                            variant="outline"
                            className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-zinc-900 shadow-lg"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Site
                          </Button>
                        </a>
                      </div>
                    ) : index === 1 ? (
                      // Second project - SWAN Shipping rotating images
                      <div className="relative w-full h-full">
                        <img
                          src={swanImages[currentSwanImageIndex]}
                          alt={`${project.title} screenshot ${currentSwanImageIndex + 1}`}
                          className="w-full h-full object-cover transition-opacity duration-500"
                        />
                        {/* Visit Site button */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <Button
                            variant="outline"
                            className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-zinc-900 shadow-lg"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Site
                          </Button>
                        </a>
                      </div>
                    ) : (
                      // Other projects - placeholder
                      <>
                        {/* Gradient overlay for modern look */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10"></div>

                        {/* Code screenshot placeholder */}
                        <div className="relative w-full h-full flex items-center justify-center p-8 backdrop-blur-sm">
                          <div className="text-center space-y-3">
                            <code className="text-blue-400 dark:text-blue-300 text-sm font-mono block">// Project Screenshot</code>
                            <code className="text-zinc-400 dark:text-zinc-500 text-xs font-mono block">Add your code screenshot here</code>
                          </div>
                        </div>

                        {/* Visit Site button */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <Button
                            variant="outline"
                            className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-zinc-900 shadow-lg"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Site
                          </Button>
                        </a>
                      </>
                    )}
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
                <Button variant="outline" className="w-full">
                  Download Resume
                </Button>
              </form>
            </CardContent>
          </Card>
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
