import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin, Instagram, Mail, Download, Terminal, Code2, Database } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-Stack Developer – Intelligent Applications";
  
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
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-28 matrix-bg cyber-grid relative overflow-hidden scroll-mt-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-secondary/10 blur-3xl animate-float" style={{animationDelay: '2s'}} />
          <div className="absolute top-3/4 left-3/4 w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-float" style={{animationDelay: '4s'}} />
        </div>

        <div className="max-w-6xl mx-auto animate-fade-in relative z-10">
          {/* Terminal window header */}
          <div className="glass-card mb-12 p-10 neon-border hover:neon-glow smooth-transition">
            <div className="flex items-center mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="font-mono text-sm text-muted-foreground">~/portfolio/developer</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="font-mono text-sm mb-6">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground ml-2">whoami</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-8 terminal-text font-mono">
                  Aayush.Yadav
                </h1>
                <div className="font-mono text-sm mb-6">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground ml-2">cat role.txt</span>
                </div>
                <h2 className="text-xl md:text-2xl font-mono min-h-8 text-foreground">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>

              <div className="code-block text-left max-w-full mx-auto p-8">
                <div className="text-primary font-mono mb-3">// About me</div>
                <div className="text-terminal-green font-mono mb-3">const developer = &#123;</div>
                <div className="ml-6 text-muted-foreground font-mono space-y-2">
                  <div>name: <span className="text-primary">"Aayush Yadav"</span>,</div>
                  <div>passion: <span className="text-secondary">"Creating intelligent experiences"</span>,</div>
                  <div>expertise: [<span className="text-accent">"Web Dev"</span>, <span className="text-accent">"AI Intelligence"</span>, <span className="text-accent">"Cloud Integration"</span>],</div>
                  <div>currentFocus: <span className="text-primary">"Cutting-edge Applications"</span></div>
                </div>
                <div className="text-terminal-green font-mono mt-3">&#125;;</div>
              </div>
            </div>
          </div>

          {/* Skills badges */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {[
              { name: "Next.js", icon: Code2 },
              { name: "Node.js", icon: Terminal },
              { name: "TypeScript", icon: Code2 },
              { name: "Databases", icon: Database },
            ].map(({ name, icon: Icon }) => (
              <Badge key={name} className={`bg-primary/10 text-primary border border-primary/30 px-4 py-2 font-mono text-sm hover:scale-105 smooth-transition`}>
                <Icon className="w-4 h-4 mr-2" />
                {name}
              </Badge>
            ))}
          </div>

          {/* Paragraph card replacing the previous two-column block */}
          <div className="glass-card neon-border p-8 max-w-4xl mx-auto mb-12 hover:neon-glow smooth-transition text-left">
            <p className="font-mono text-base text-muted-foreground leading-relaxed">
              I'm Aayush Yadav, a passionate developer who loves creating intelligent digital experiences. With expertise spanning Web Development, AI intelligence, and Cloud integrations, I thrive on building seamless, scalable solutions that don't just work—they delight users. Currently, my focus is on pushing boundaries with cutting-edge AI and developer experience (DX), crafting products that blend innovation, usability, and performance into one powerful package.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {/* Removed CV Download button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="glass-card neon-border smooth-transition hover:neon-glow font-mono px-8 py-3">
                  <Mail className="mr-2 h-5 w-5" />
                  ./contact.exe
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="glass-card border-primary/30 font-mono text-sm">
                <div>Phone: +91 956031778</div>
                <div>Email: aayush130405@gmail.com</div>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex justify-center gap-8">
            {[
              { icon: Github, href: "https://github.com/aayush130405", label: "GitHub", desc: "View my code repositories" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/aayush130405/", label: "LinkedIn", desc: "Professional network" },
              { icon: Instagram, href: "https://www.instagram.com/aayush130405/", label: "Instagram", desc: "Behind the scenes" },
            ].map(({ icon: Icon, href, label, desc }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    className="p-5 glass-card neon-border hover:neon-glow smooth-transition hover:scale-110 group"
                    aria-label={label}
                  >
                    <Icon className="h-7 w-7 group-hover:text-primary smooth-transition" />
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