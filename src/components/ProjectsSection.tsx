import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, Github, Eye, Star, GitFork } from "lucide-react";

const projects = [
  {
    title: "CyberCommerce",
    subtitle: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern design and seamless user experience. Features include product catalog, shopping cart, payment integration, and admin dashboard.",
    longDescription: "Built with microservices architecture, this platform handles thousands of concurrent users with real-time inventory management and AI-powered recommendations.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    stats: { stars: 247, forks: 89, watchers: 45 },
    progress: {
      "Frontend": 100,
      "Backend": 95,
      "Testing": 80,
      "Deployment": 90
    },
    status: "Production",
    year: "2023"
  },
  {
    title: "TaskMaster AI",
    subtitle: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and AI-powered task prioritization.",
    longDescription: "Features intelligent task scheduling, automated progress tracking, and team performance analytics with machine learning insights.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "OpenAI", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    stats: { stars: 156, forks: 34, watchers: 28 },
    progress: {
      "Frontend": 95,
      "Backend": 90,
      "AI Integration": 75,
      "Testing": 70
    },
    status: "Beta",
    year: "2024"
  },
  {
    title: "WeatherNet",
    subtitle: "Weather Analytics",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities.",
    longDescription: "Integrates multiple weather APIs with machine learning for improved forecast accuracy and personalized weather insights.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Mapbox", "Python"],
    liveUrl: "#",
    githubUrl: "#",
    stats: { stars: 89, forks: 23, watchers: 16 },
    progress: {
      "Frontend": 100,
      "API Integration": 95,
      "Data Visualization": 85,
      "Mobile": 60
    },
    status: "Stable",
    year: "2023"
  },
  {
    title: "DevPortfolio",
    subtitle: "Portfolio Framework",
    description: "Modern portfolio framework with cyber aesthetics, showcasing projects and skills with smooth animations and responsive design.",
    longDescription: "Built as a template for developers, featuring terminal-inspired UI, glassmorphism effects, and modular component architecture.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    stats: { stars: 312, forks: 78, watchers: 52 },
    progress: {
      "Design": 100,
      "Components": 95,
      "Documentation": 70,
      "Templates": 60
    },
    status: "Active",
    year: "2024"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 matrix-bg">
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
                        className="flex-1 font-mono text-xs smooth-transition hover:scale-105"
                      >
                        <ExternalLink className="h-3 w-3 mr-2" />
                        ./deploy
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 glass-card neon-border font-mono text-xs smooth-transition hover:scale-105"
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
                      <span className="text-primary">Repository:</span> github.com/johndoe/{project.title.toLowerCase()}
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