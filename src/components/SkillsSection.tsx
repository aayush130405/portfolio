import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const coreSkills: Array<{ name: string; level: number }> = [
  { name: "Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "VPS", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "Databases", level: 85 },
  { name: "Git", level: 80 },
];

const tools: string[] = [
  "Git",
  "TypeScript",
  "Node.js",
  "Vercel",
  "Next.js",
  "Prisma",
  "NeonDB",
  "MongoDB",
  "Mongoose",
  "Tailwind CSS",
  "Vite",
  "NPM",
  "Nginx",
  "VPS",
  "Cloudinary AI",
  "OpenAI",
  "Postman",
  "REST APIs",
  "Shadcn UI",
  "DaisyUI",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="pb-16 px-6 matrix-bg cyber-grid scroll-mt-2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold terminal-text font-mono mb-4">
            ./skills --matrix
          </h2>
          <div className="text-muted-foreground font-mono">
            <span className="text-primary">$</span> cat skills.json
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card neon-border p-8 animate-fade-in hover:neon-glow smooth-transition">
            <h3 className="font-mono text-terminal-cyan mb-6">// Core Competencies</h3>
            <div className="space-y-4">
              {coreSkills.map(({ name, level }) => (
                <div key={name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-sm">{name}</span>
                    <span className="font-mono text-xs text-primary">{level}%</span>
                  </div>
                  <Progress value={level} className="h-2 bg-muted/30" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card neon-border p-8 animate-fade-in hover:neon-glow smooth-transition" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-mono text-terminal-cyan mb-6">// Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <Badge
                  key={t}
                  className="bg-primary/20 text-primary border border-primary/30 font-mono text-xs hover:bg-primary/30 smooth-transition whitespace-nowrap px-3 py-1"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


