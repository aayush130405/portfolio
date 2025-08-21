import { Calendar, MapPin, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovation Corp",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and improved application performance by 40%. Implemented CI/CD pipelines and mentored junior developers.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
    achievements: [
      "Increased system performance by 40%",
      "Led team of 5 developers",
      "Implemented microservices architecture",
      "Reduced deployment time by 60%"
    ],
    skills: {
      "Frontend": 95,
      "Backend": 90,
      "DevOps": 85,
      "Leadership": 88
    }
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions LLC",
    location: "Remote",
    period: "2020 - 2022",
    description: "Developed responsive web applications and collaborated with design teams to create intuitive user interfaces. Implemented modern frontend frameworks and best practices. Built component libraries and design systems.",
    technologies: ["React", "Vue.js", "JavaScript", "Tailwind CSS", "Figma", "Storybook"],
    achievements: [
      "Built reusable component library",
      "Improved page load speed by 50%",
      "Designed comprehensive design system",
      "Mentored 3 junior developers"
    ],
    skills: {
      "React": 92,
      "Vue.js": 85,
      "CSS": 88,
      "Design": 75
    }
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    location: "New York, NY",
    period: "2019 - 2020",
    description: "Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies. Contributed to multiple client projects and learned modern development practices.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
    achievements: [
      "Delivered 15+ client projects",
      "Learned full-stack development",
      "Improved code quality standards",
      "Adopted agile methodologies"
    ],
    skills: {
      "JavaScript": 70,
      "PHP": 65,
      "MySQL": 60,
      "WordPress": 80
    }
  }
];

const ExperienceSection = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-20 px-6 matrix-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold terminal-text font-mono mb-4">
            ./experience --verbose
          </h2>
          <div className="text-muted-foreground font-mono">
            <span className="text-primary">$</span> cat career_timeline.log
          </div>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Collapsible
              key={index}
              open={openItems[index]}
              onOpenChange={() => toggleItem(index)}
            >
              <div 
                className="glass-card neon-border smooth-transition hover:neon-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CollapsibleTrigger className="w-full p-8 text-left">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold terminal-text font-mono mb-2">
                            {exp.title}
                          </h3>
                          <h4 className="text-xl text-secondary mb-2 font-mono">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="flex flex-col lg:items-end text-muted-foreground font-mono text-sm">
                          <div className="flex items-center mb-1">
                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-primary/20 text-primary border border-primary/30 font-mono text-xs hover:bg-primary/30 smooth-transition"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <ChevronDown 
                      className={`h-6 w-6 text-primary smooth-transition ${
                        openItems[index] ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="px-8 pb-8 border-t border-primary/20">
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h5 className="font-mono text-terminal-cyan mb-3">// Description</h5>
                        <p className="text-muted-foreground leading-relaxed mb-4 font-mono text-sm">
                          {exp.description}
                        </p>
                        
                        <h5 className="font-mono text-terminal-cyan mb-3">// Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start font-mono text-sm">
                              <span className="text-primary mr-2">▸</span>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-mono text-terminal-cyan mb-3">// Skills Progress</h5>
                        <div className="space-y-3">
                          {Object.entries(exp.skills).map(([skill, level]) => (
                            <div key={skill}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-mono text-sm">{skill}</span>
                                <span className="font-mono text-xs text-primary">{level}%</span>
                              </div>
                              <Progress 
                                value={level} 
                                className="h-2 bg-muted/30"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;