import { Calendar, MapPin, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const experiences = [
  {
    title: "ServiceNow Developer Intern",
    company: "Copain Technologies",
    location: "Gurugram, HR, India (Hybrid)",
    period: "Jun 2025 - Aug 2025",
    description: "During my internship at Copains Pvt. Ltd., I worked on developing and integrating backend solutions with ServiceNow to streamline enterprise workflows. My role primarily involved API development using Node.js and Express, followed by integration with ServiceNow modules for efficient process automation. I also gained hands-on experience in cloud-native concepts, including Docker and microservices, while ensuring quality through testing and debugging. This internship not only enhanced my technical expertise in backend and enterprise platforms but also strengthened my ability to work in a professional development environment.",
    technologies: ["Express.js", "Node.js", "TypeScript", "ServiceNow", "Docker", "Git", "Postman"],
    achievements: [
      "Developed and deployed RESTful APIs",
      "Streamlined ServiceNow workflows",
      "Explored and applied cloud-native practices",
      "Enhanced system reliability",
      "Collaborated with cross-functional teams"
    ],
    skills: {
      "Frontend": 88,
      "Backend": 95,
      "DevOps": 85,
      "Leadership": 88
    }
  },
  {
    title: "Full Stack Developer Intern",
    company: "WorrisGo",
    location: "Gurugram, HR, India (Remote)",
    period: "Nov 2024 - Dec 2024",
    description: "Contributed to end-to-end web application development, working on both frontend (React) and backend (Node.js, Express, MongoDB). Built scalable APIs, optimized database queries, and integrated modern UI/UX practices to deliver smooth and responsive user experiences. Collaborated with the team to ensure performance, security, and maintainability across the product lifecycle.",
    technologies: ["Express.js", "Node.js", "JavaScript", "MongoDB", "React", "Postman", "Git"],
    achievements: [
      "Designed and implemented RESTful APIs",
      "Improved page load speed by 50%",
      "Designed comprehensive design system",
      "Optimized database queries and backend logic"
    ],
    skills: {
      "Express.js": 85,
      "Node.js": 95,
      "MongoDB": 88,
      "React": 85,
      "Git": 90,
      "Postman": 85,
    }
  },
  {
    title: "Project Collaboration Lead",
    company: "The Victors Club",
    location: "Gurugram, HR, India (On-Site)",
    period: "Sep 2024 - Nov 2024",
    description: "Led collaboration initiatives within the college club, focusing on project coordination and web development. Actively contributed to building the club’s online presence by developing and maintaining its official website. Worked closely with team members to streamline workflows, encourage participation, and deliver impactful digital solutions for the club.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Node.js", "MongoDB", "Git"],
    achievements: [
      "Spearheaded the development of the club’s official website",
      "Learned full-stack development",
      "Coordinated cross-team projects",
      "Introduced structured workflows for project planning and tracking",
      "Facilitated communication and collaboration tools"
    ],
    skills: {
      "JavaScript": 80,
      "Tailwind CSS": 85,
      "MongoDB": 80,
      "Git": 90,
      "Node.js": 85,
    }
  },
  {
    title: "Web Developer Volunteer",
    company: "Google Developer Student Clubs (GDSC)",
    location: "Gurugram, HR, India (On-Site)",
    period: "Jan 2024 - July 2024",
    description: "Contributed as a Web Developer Volunteer at GDSC, where I actively engaged in building digital solutions for community events and initiatives. During this experience, I strengthened my technical skills in React, JavaScript, and CSS while also gaining valuable exposure to teamwork and leadership through collaboration with peers on impactful projects.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "React", "Git"],
    achievements: [
      "Designed and developed the official hackathon website for the club",
      "Enhanced front-end skills in React, JavaScript, and CSS",
      "Collaborated effectively in a team-based environment",
      "Took on leadership responsibilities within project tasks"
    ],
    skills: {
      "JavaScript": 80,
      "Tailwind CSS": 85,
      "Git": 90,
      "React": 85,
    }
  }
];

const ExperienceSection = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="experience" className="py-20 px-6 matrix-bg cyber-grid scroll-mt-24">
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