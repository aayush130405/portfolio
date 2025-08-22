import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Palette, ChevronDown } from "lucide-react";

type ThemeName = "cyber" | "light" | "blue" | "rose" | "violet" | "emerald" | "coffee" | "midnight";

const THEME_CLASS_BY_NAME: Record<ThemeName, string> = {
  cyber: "", // default via :root
  light: "theme-light",
  blue: "theme-blue",
  rose: "theme-rose",
  violet: "theme-violet",
  emerald: "theme-emerald",
  coffee: "theme-coffee",
  midnight: "theme-midnight",
};

const themeLabel: Record<ThemeName, string> = {
  cyber: "Cyber",
  light: "Light",
  blue: "Blue",
  rose: "Rose",
  violet: "Violet",
  emerald: "Emerald",
  coffee: "Coffee",
  midnight: "Midnight",
};

const applyTheme = (name: ThemeName) => {
  const root = document.documentElement;
  root.classList.remove("theme-light", "theme-blue", "theme-rose", "theme-violet", "theme-emerald", "theme-coffee", "theme-midnight");
  const themeClass = THEME_CLASS_BY_NAME[name];
  if (themeClass) root.classList.add(themeClass);
};

const Navbar = () => {
  const [theme, setTheme] = useState<ThemeName>(() => (localStorage.getItem("theme") as ThemeName) || "cyber");

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navItemClass = "text-sm font-mono text-muted-foreground hover:text-primary smooth-transition";

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur-xl border-b border-primary/20 bg-background/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#about" className="font-mono terminal-text text-lg">&lt;Aayush.Yadav /&gt;</a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className={navItemClass}>about</a>
            <a href="#experience" className={navItemClass}>experience</a>
            <a href="#projects" className={navItemClass}>projects</a>
            <a href="#skills" className={navItemClass}>skills</a>
          </nav>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="glass-card neon-border font-mono text-xs px-2 md:px-4">
                  <Palette className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">{themeLabel[theme]}</span>
                  <ChevronDown className="w-3 h-3 md:ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-card neon-border">
                <DropdownMenuLabel className="font-mono text-xs text-muted-foreground">Choose theme</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setTheme("cyber")} className="font-mono text-sm">Cyber</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("light")} className="font-mono text-sm">Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("blue")} className="font-mono text-sm">Blue</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("rose")} className="font-mono text-sm">Rose</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("violet")} className="font-mono text-sm">Violet</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("emerald")} className="font-mono text-sm">Emerald</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("coffee")} className="font-mono text-sm">Coffee</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("midnight")} className="font-mono text-sm">Midnight</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


