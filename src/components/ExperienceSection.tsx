import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovation Corp",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and improved application performance by 40%.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions LLC",
    location: "Remote",
    period: "2020 - 2022",
    description: "Developed responsive web applications and collaborated with design teams to create intuitive user interfaces. Implemented modern frontend frameworks and best practices.",
    technologies: ["React", "Vue.js", "JavaScript", "Tailwind CSS", "Figma"]
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    location: "New York, NY",
    period: "2019 - 2020",
    description: "Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-card p-8 smooth-transition hover:bg-card-glass/60 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl text-foreground mb-2">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex flex-col lg:items-end text-muted-foreground">
                  <div className="flex items-center mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;