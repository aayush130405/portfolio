import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, Github, Eye, Star, GitFork } from "lucide-react";

const projects = [
  {
    title: "Rezio",
    subtitle: "Context-aware image crops and high‑fidelity video compression, deployed at scale",
    description: 'Rezio is a browser-based media optimization SaaS built with Next.js, Prisma + Neon DB, and Cloudinary. It offers AI-powered cropping and compression, eliminating the need for desktop software. Think "media processing API with a beautiful UI" - upload once, optimize instantly, no installs required.',
    longDescription: "This app is a Next.js 14 App Router application with TypeScript, Prisma ORM + Neon PostgreSQL, and Cloudinary media processing. Features include AI-powered context-aware cropping, intelligent compression algorithms, and a modern Tailwind CSS UI. Built with serverless architecture on Vercel and robust authentication using clerk, it handles media uploads via API routes and provides instant optimization without client-side processing.",
    technologies: ["Next.js 14", "Node.js", "TypeScript", "Prisma ORM", "Neon PostgreSQL", "Cloudinary", "Vercel", "Daisy UI", "Tailwind CSS", "Clerk", "Git", "GitHub"],
    liveUrl: "https://rezioai.vercel.app",
    githubUrl: "https://github.com/aayush130405/rezio-saas",
    stats: { stars: 1, forks: 0, watchers: 45 },
    progress: {
      "Frontend": 85,
      "Backend": 100,
      "Testing": 95,
      "Deployment": 90
    },
    status: "Production",
    year: "2025"
  },
  {
    title: "vidTube",
    subtitle: "The complete video platform for creators",
    description: "vidTube is a Express.js based video streaming platform that empowers creators with channel management, analytics, and social features. Built with MongoDB, Node.js, Express.js it provides video uploads, user subscriptions, likes, comments, and comprehensive dashboard insights for tracking views, subscribers, and engagement metrics - essentially a full-stack YouTube alternative for content creators.",
    longDescription: "This app is a RESTful Node.js API built with Express.js and MongoDB, featuring JWT authentication, Multer for file uploads, and Cloudinary integration for video storage. The architecture follows MVC pattern with dedicated controllers for video management, user operations, social interactions (likes, subscriptions, comments), and analytics. Built with async/await patterns, custom error handling middleware, and modular routing structure for scalable video streaming platform development",
    technologies: ["Node.js", "Express.js", "Tailwind CSS", "MongoDB", "Mongoose", "JWT", "Multer", "Cloudinary", "Postman", "Git", "GitHub"],
    liveUrl: "#",
    githubUrl: "https://github.com/aayush130405/vidTube",
    stats: { stars: 0, forks: 0, watchers: 28 },
    progress: {
      "Backend": 95,
      "AI Integration": 75,
      "Testing": 90,
      "Architecture": 95
    },
    status: "Active",
    year: "2025"
  },
  {
    title: "NextJS Auth",
    subtitle: "Secure, scalable Full Stack authentication system built with Next.js, MongoDB, and TypeScript",
    description: "Auth-NextJS is a complete authentication solution built with Next.js, MongoDB, and TypeScript. It provides secure user management with encrypted passwords, email verification, and a robust forgot/reset password system—fully deployed on Vercel and perfect for developers who want production-ready auth without building it from scratch.",
    longDescription: "Auth-NextJS is a full-stack authentication system built with Next.js 13+ (App Router), MongoDB with Mongoose ODM, and TypeScript. The backend implements secure user authentication using bcryptjs for password hashing and JWT tokens for session management, while the email system leverages Mailtrap for transactional emails including verification links and password reset tokens with configurable expiry times. The frontend features React components with TypeScript interfaces and responsive UI built with Tailwind CSS, all deployed on Vercel with proper environment variable management for production security.",
    technologies: ["Next.js 13+", "React 18", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "bcryptjs", "JWT", "Mailtrap", "Vercel", "Git", "GitHub"],
    liveUrl: "https://nextjs-auth-self-two.vercel.app",
    githubUrl: "https://github.com/aayush130405/nextjs-auth",
    stats: { stars: 0, forks: 0, watchers: 16 },
    progress: {
      "Frontend": 100,
      "Backend": 95,
      "Testing": 75,
      "Deployment": 95
    },
    status: "Production",
    year: "2025"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 matrix-bg cyber-grid scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold terminal-text font-mono mb-4">
            ./projects --showcase
          </h2>
          <div className="text-muted-foreground font-mono">
            <span className="text-primary">$</span> git log --oneline --graph
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div 
                  className="glass-card neon-border overflow-hidden group smooth-transition hover:neon-glow cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Header */}
                  <div className="p-6 border-b border-primary/20">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold terminal-text font-mono mb-1">
                          {project.title}
                        </h3>
                        <p className="text-secondary font-mono text-sm">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`font-mono text-xs ${
                          project.status === 'Production' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                          project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                          project.status === 'Stable' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                          'bg-purple-500/20 text-purple-400 border-purple-500/30'
                        }`}>
                          {project.status}
                        </Badge>
                        <Badge className="bg-muted/20 text-muted-foreground border-muted/30 font-mono text-xs">
                          {project.year}
                        </Badge>
                      </div>
                    </div>

                    {/* GitHub Stats */}
                    <div className="flex items-center gap-4 mb-4 font-mono text-xs">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Star className="w-3 h-3" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <GitFork className="w-3 h-3" />
                        <span>{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Eye className="w-3 h-3" />
                        <span>{project.stats.watchers}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="p-6 border-b border-primary/20">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-primary/20 text-primary border border-primary/30 font-mono text-xs hover:bg-primary/30 smooth-transition"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="p-6 border-b border-primary/20">
                    <h4 className="font-mono text-terminal-cyan text-sm mb-3">// Development Progress</h4>
                    <div className="space-y-2">
                      {Object.entries(project.progress).map(([area, progress]) => (
                        <div key={area} className="flex items-center gap-3">
                          <span className="font-mono text-xs w-20 text-muted-foreground">{area}</span>
                          <Progress value={progress} className="flex-1 h-1" />
                          <span className="font-mono text-xs text-primary w-8">{progress}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="p-6">
                    <div className="flex gap-3">
                      <Button 
                        size="sm"
                        className={`flex-1 font-mono text-xs smooth-transition ${
                          project.liveUrl && project.liveUrl !== "#" 
                            ? "hover:scale-105" 
                            : "opacity-50 cursor-not-allowed"
                        }`}
                        onClick={() => project.liveUrl && project.liveUrl !== "#" ? window.open(project.liveUrl, '_blank') : null}
                        disabled={!project.liveUrl || project.liveUrl === "#"}
                        title={project.liveUrl && project.liveUrl !== "#" ? "Open Live Demo" : "Live Demo Not Available"}
                      >
                        <ExternalLink className="h-3 w-3 mr-2" />
                        ./deploy
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 glass-card neon-border font-mono text-xs smooth-transition hover:scale-105"
                        onClick={() => project.githubUrl ? window.open(project.githubUrl, '_blank') : null}
                        title="View Source Code on GitHub"
                      >
                        <Github className="h-3 w-3 mr-2" />
                        ./source
                      </Button>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              
              <HoverCardContent 
                side="top" 
                className="w-80 glass-card neon-border p-4"
                sideOffset={5}
              >
                <div className="font-mono">
                  <h4 className="text-terminal-cyan text-sm mb-2">// Extended Info</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {project.longDescription}
                  </p>
                  <div className="mt-3 pt-3 border-t border-primary/20">
                    <div className="text-xs text-muted-foreground">
                      <span className="text-primary">Repository:</span> github.com/aayush130405/{project.title.toLowerCase()}
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;