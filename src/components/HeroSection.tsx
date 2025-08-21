import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-foreground to-purple-200 bg-clip-text text-transparent">
            John Doe
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full Stack Developer & Designer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional digital experiences. 
            I specialize in modern web technologies and user-centered design.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="default" size="lg" className="glow-effect smooth-transition hover:scale-105">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
          <Button variant="outline" size="lg" className="glass-card smooth-transition hover:scale-105">
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Instagram, href: "#", label: "Instagram" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 glass-card hover:bg-primary/20 smooth-transition hover:scale-110 group"
              aria-label={label}
            >
              <Icon className="h-6 w-6 group-hover:text-primary smooth-transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;