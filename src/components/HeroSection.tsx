import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin, Instagram, Mail, Download, Terminal, Code2, Database } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer & Cyber Architect";
  
  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    const timeout = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <TooltipProvider>
      <section className="min-h-screen flex items-center justify-center px-6 py-20 matrix-bg cyber-grid relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary/5 blur-3xl animate-float" style={{animationDelay: '2s'}} />
          <div className="absolute top-3/4 left-3/4 w-32 h-32 rounded-full bg-accent/5 blur-3xl animate-float" style={{animationDelay: '4s'}} />
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
          {/* Terminal window header */}
          <div className="glass-card mb-8 p-8 neon-border">
            <div className="flex items-center mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="font-mono text-sm text-muted-foreground">~/portfolio/developer</span>
              </div>
            </div>
            
            <div className="text-left">
              <div className="font-mono text-sm mb-4">
                <span className="text-primary">$</span>
                <span className="text-muted-foreground ml-2">whoami</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 terminal-text font-mono">
                Aayush.Yadav
              </h1>
              <div className="font-mono text-sm mb-4">
                <span className="text-primary">$</span>
                <span className="text-muted-foreground ml-2">cat role.txt</span>
              </div>
              <h2 className="text-xl md:text-2xl terminal-text font-mono min-h-8">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          {/* Skills badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {[
              { name: "React", icon: Code2, color: "bg-blue-500/20 text-blue-400" },
              { name: "Node.js", icon: Terminal, color: "bg-green-500/20 text-green-400" },
              { name: "TypeScript", icon: Code2, color: "bg-blue-600/20 text-blue-300" },
              { name: "MongoDB", icon: Database, color: "bg-green-600/20 text-green-300" },
            ].map(({ name, icon: Icon, color }) => (
              <Badge key={name} className={`${color} border border-current/30 px-3 py-1 font-mono text-sm hover:scale-105 smooth-transition`}>
                <Icon className="w-4 h-4 mr-2" />
                {name}
              </Badge>
            ))}
          </div>

          <div className="code-block text-left max-w-2xl mx-auto mb-8">
            <div className="text-terminal-cyan">// About me</div>
            <div className="text-terminal-green">const developer = &#123;</div>
            <div className="ml-4 text-muted-foreground">
              name: <span className="text-yellow-400">"John Doe"</span>,<br />
              passion: <span className="text-yellow-400">"Creating digital experiences"</span>,<br />
              expertise: [<span className="text-yellow-400">"Web Dev"</span>, <span className="text-yellow-400">"UI/UX"</span>, <span className="text-yellow-400">"DevOps"</span>],<br />
              currentFocus: <span className="text-yellow-400">"Cutting-edge tech"</span>
            </div>
            <div className="text-terminal-green">&#125;;</div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button className="neon-glow smooth-transition hover:scale-105 font-mono">
              <Download className="mr-2 h-5 w-5" />
              ./download-cv.sh
            </Button>
            <Button variant="outline" className="glass-card neon-border smooth-transition hover:scale-105 font-mono">
              <Mail className="mr-2 h-5 w-5" />
              ./contact.exe
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: "#", label: "GitHub", desc: "View my code repositories" },
              { icon: Linkedin, href: "#", label: "LinkedIn", desc: "Professional network" },
              { icon: Instagram, href: "#", label: "Instagram", desc: "Behind the scenes" },
            ].map(({ icon: Icon, href, label, desc }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    className="p-4 glass-card neon-border hover:neon-glow smooth-transition hover:scale-110 group"
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6 group-hover:text-primary smooth-transition" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="glass-card border-primary/30">
                  <p className="font-mono text-sm">{desc}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default HeroSection;