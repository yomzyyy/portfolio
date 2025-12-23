"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Facebook, Instagram, Mail, ExternalLink, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

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
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["Next.js", "MongoDB", "Stripe"],
      image: "/project1.jpg",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates",
      tech: ["React", "Firebase", "Tailwind"],
      image: "/project2.jpg",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking with interactive maps",
      tech: ["TypeScript", "API Integration", "Chart.js"],
      image: "/project3.jpg",
      link: "#"
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support",
      tech: ["Next.js", "MDX", "PostgreSQL"],
      image: "/project4.jpg",
      link: "#"
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio builder for developers",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/project5.jpg",
      link: "#"
    },
    {
      title: "Chat Application",
      description: "Real-time messaging with WebSocket",
      tech: ["Socket.io", "Express", "React"],
      image: "/project6.jpg",
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

      <header className="fixed top-0 right-0 p-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 space-y-24">
        <section className="flex flex-col items-center justify-center text-center space-y-6 min-h-[80vh]">
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800">
              <img
                src="/profile.jpg"
                alt="Jerome Magbanua"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
              Ernest Jerome M. Magbanua
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Full-Stack Developer
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-2xl mx-auto">
              Crafting end-to-end web solutions that stay fast, scalable, and responsive in real time.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <a href="https://github.com/yomzyyy" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>     
            </a>
            <a href="https://www.linkedin.com/in/magbanuajerome/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.facebook.com/MaelStrong.18" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.instagram.com/yomz.ej/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
            </a>
          </div>

          <Button className="mt-4">Request Resume</Button>
        </section>


        <section className="space-y-6">
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

 
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">Personal Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <div className="aspect-video bg-zinc-100 dark:bg-zinc-800" />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium dark:bg-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
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


        <section className="space-y-6">
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
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>&copy; 2025 Jerome Magbanua. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
