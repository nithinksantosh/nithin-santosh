
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, ExternalLink, FileText, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
    
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const skills = [
    { category: "Languages", items: ["Python", "SQL", "Java"] },
    { category: "Cloud", items: ["AWS", "Azure"] },
    { category: "Data Tools", items: ["Snowflake", "Airflow", "Spark", "MLflow", "dbt"] },
    { category: "BI", items: ["Tableau", "Power BI"] },
    { category: "Practices", items: ["Agile", "Scrum", "SAFe", "SDLC"] }
  ];

  const interests = [
    { icon: "✈️", label: "Travelling" },
    { icon: "👨‍🍳", label: "Cooking" },
    { icon: "📜", label: "History & Politics" },
    { icon: "☕", label: "Coffee & Cafés" },
    { icon: "📚", label: "Vedic Philosophy" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full shadow-lg backdrop-blur-sm"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center text-center animate-fade-in">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-light tracking-tight leading-tight">
                I craft systems that think,<br />
                <span className="text-muted-foreground">and insights that speak.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
                Building elegant solutions across data, engineering, and machine learning.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Button 
                variant="default" 
                className="gap-2"
                onClick={() => window.open('https://drive.google.com/file/d/11Gx6u947H0NPiT9B4IPwWdWDsw_NL_KS/view', '_blank')}
              >
                <FileText className="h-4 w-4" />
                Resume
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => window.open('https://linkedin.com/in/nithin-k-6ab475155', '_blank')}
              >
                💼 LinkedIn
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => window.open('https://github.com/nithinksantosh', '_blank')}
              >
                🐙 GitHub
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => window.open('mailto:nithin.kothamasa@gmail.com', '_blank')}
              >
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center">About</h2>
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  With nearly a decade of experience across the software development life cycle, I specialize in building scalable data systems, solving complex analytics problems, and delivering business-centric ML solutions. Starting my career as a web developer, I transitioned into data engineering and advanced analytics roles, blending technical depth with business alignment. I thrive in cross-functional teams, working closely with CSMs, clients, and leadership to craft actionable insights and AI-driven strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 animate-fade-in">
          <h2 className="text-3xl font-light mb-16 text-center">Experience</h2>
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-muted">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Principal Technical Consultant</h3>
                <p className="text-muted-foreground">Digital.ai • Bangalore, India</p>
                <p className="text-sm text-muted-foreground">May 2023 – Present</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>• Leading the architecture and delivery of data and ML platforms</li>
                  <li>• Collaborating closely with CSMs, clients, and leadership teams</li>
                  <li>• Driving AI/ML-powered insights across customer-facing solutions</li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-8 border-l border-muted">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Previous Roles</h3>
                <p className="text-muted-foreground">Web Developer → Data Engineer → BI Analyst</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>• Designed and deployed scalable data pipelines and dashboards</li>
                  <li>• Delivered predictive models and explainable ML solutions</li>
                  <li>• Worked across BFSI and SaaS domains, aligning with stakeholders</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 animate-fade-in">
          <h2 className="text-3xl font-light mb-16 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="border-0 shadow-none bg-card/50">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-24 animate-fade-in">
          <h2 className="text-3xl font-light mb-16 text-center">Certifications</h2>
          <div className="text-center">
            <Badge variant="outline" className="text-sm px-4 py-2">
              SAFe® 5 Agilist Certified
            </Badge>
          </div>
        </section>

        {/* Personal Quote */}
        <section className="py-24 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto">
            <blockquote className="text-xl italic text-muted-foreground font-light leading-relaxed">
              "Whether it's systems, food, or scriptures — I love uncovering the layers that reveal truth, simplicity, and meaning."
            </blockquote>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="py-24 animate-fade-in">
          <h2 className="text-3xl font-light mb-16 text-center">Personal Interests</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-xl">{interest.icon}</span>
                <span className="text-sm">{interest.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <footer className="py-24 border-t border-muted animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Contact</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:nithin.kothamasa@gmail.com" className="hover:text-foreground transition-colors">
                    nithin.kothamasa@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6">Connect</h3>
              <div className="space-y-3 text-muted-foreground">
                <a 
                  href="https://github.com/nithinksantosh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  🐙 GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a 
                  href="https://linkedin.com/in/nithin-k-6ab475155" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  💼 LinkedIn
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a 
                  href="https://instagram.com/nithin_santosh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  📷 Instagram
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a 
                  href="https://twitter.com/nithin_santosh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  ✖️ Twitter/X
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-muted text-center text-sm text-muted-foreground">
            <p>© 2024 Nithin K. Crafted with care and attention to detail.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
