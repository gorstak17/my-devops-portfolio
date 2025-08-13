import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

import { 
  Terminal, 
  Server, 
  Code, 
  Database, 
  Zap, 
  GitBranch, 
  Cloud, 
  Globe,
  Settings,
  Activity,
  Package
} from "lucide-react";

const Portfolio = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "DevOps Engineer & Infrastructure Specialist";
  const typingSpeed = 100;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(!showCursor);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  const skills = [
    { name: "Terraform", level: 95, icon: Settings },
    { name: "AWS", level: 92, icon: Cloud },
    { name: "Docker", level: 90, icon: Package },
    { name: "Kubernetes", level: 88, icon: GitBranch },
    { name: "Linux", level: 90, icon: Terminal },
    { name: "Python", level: 85, icon: Code },
    { name: "Bash", level: 88, icon: Terminal },
    { name: "Git", level: 95, icon: GitBranch },
    { name: "JavaScript", level: 80, icon: Code },
    { name: "Azure DevOps", level: 85, icon: Activity },
    { name: "JFrog", level: 82, icon: Package },
    { name: "Bitbucket Pipelines", level: 78, icon: Activity }
  ];

  const projects = [
    {
      title: "Laravel Counter on AWS ECS Fargate",
      description: "Containerized Laravel application deployed on AWS ECS Fargate with Terraform IaC. Features ECR, ElastiCache Redis, SSM Parameter Store, ALB, and complete CI/CD automation with GitHub Actions.",
      tech: ["Terraform", "AWS ECS", "Docker", "Laravel", "Redis", "GitHub Actions"],
      github: "https://github.com/gorstak17/infrastructure-laravel-redis",
      live: "https://github.com/gorstak17/infrastructure-laravel-redis",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop"
    },
    {
      title: "OCR Fargate Pipeline",
      description: "Serverless OCR processing pipeline using AWS Lambda, SQS, ECS Fargate, and S3. Automates PDF text extraction with ocrmypdf, featuring event-driven architecture and scalable infrastructure.",
      tech: ["AWS Lambda", "ECS Fargate", "SQS", "S3", "Terraform", "Python"],
      github: "https://github.com/gorstak17/ocr-fargate-pipeline",
      live: "https://github.com/gorstak17/ocr-fargate-pipeline",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
    },
    {
      title: "Fruit Slot Machine Game",
      description: "Interactive browser-based slot machine game with fruit-themed UI and engaging spin mechanics. Features 5 reels, 4 rows layout with configurable betting and responsive design.",
      tech: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation", "Game Logic"],
      github: "https://github.com/gorstak17/slot-machine",
      live: "https://github.com/gorstak17/slot-machine",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
    }
  ];

  const tools = [
    { name: "Terraform", icon: Settings, category: "Infrastructure as Code" },
    { name: "AWS", icon: Cloud, category: "Cloud Platform" },
    { name: "Azure", icon: Cloud, category: "Cloud Platform" },
    { name: "Docker", icon: Package, category: "Containerization" },
    { name: "Kubernetes", icon: GitBranch, category: "Container Orchestration" },
    { name: "Azure DevOps", icon: Activity, category: "CI/CD" },
    { name: "JFrog", icon: Package, category: "Artifact Management" },
    { name: "Bitbucket Pipelines", icon: Activity, category: "CI/CD" },
    { name: "SAP CAP", icon: Database, category: "SAP Development" },
    { name: "SAP BTP", icon: Cloud, category: "SAP Cloud Platform" },
    { name: "Cloud Foundry", icon: Cloud, category: "Platform as a Service" },
    { name: "Linux", icon: Terminal, category: "Operating System" },
    { name: "Python", icon: Code, category: "Programming" },
    { name: "JavaScript", icon: Code, category: "Frontend" },
    { name: "Bash", icon: Terminal, category: "Scripting" },
    { name: "Git", icon: GitBranch, category: "Version Control" }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-green-500/20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Terminal className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold text-green-400">Aleksandar Lončar</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-green-400 hover:text-green-300 transition-colors">About</a>
              <a href="#skills" className="text-green-400 hover:text-green-300 transition-colors">Skills</a>
              <a href="#projects" className="text-green-400 hover:text-green-300 transition-colors">Projects</a>
              <a href="#contact" className="text-green-400 hover:text-green-300 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              {/* Profile Picture */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-green-400 overflow-hidden bg-green-400/10 backdrop-blur-sm">
                    <img 
                      src="/profile.jpg?v=1" 
                      alt="Aleksandar Lončar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-6xl font-bold text-green-400 mb-4">
                <span className="text-green-300">$</span> whoami
              </h1>
              <div className="text-2xl text-green-300 font-mono">
                {typedText}
                <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-green-200 leading-relaxed">
                Passionate DevOps engineer with expertise in AWS cloud infrastructure, Infrastructure as Code, and automation. 
                Building scalable, secure, and efficient systems using Terraform, Docker, and modern CI/CD practices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-500 text-black font-bold px-8 py-3 border border-green-400"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Terminal className="w-4 h-4 mr-2" />
                View Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-400 mb-4">
              <span className="text-green-300">$</span> skills --list
            </h2>
            <p className="text-green-200">Technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-black/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-6 h-6 text-green-400" />
                      <CardTitle className="text-green-400">{skill.name}</CardTitle>
                    </div>
                    <span className="text-green-300 text-sm">{skill.level}%</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-green-900/20 rounded-full h-2">
                    <div 
                      className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-400 mb-4">
              <span className="text-green-300">$</span> ls -la projects/
            </h2>
            <p className="text-green-200">Recent projects and contributions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-black/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-green-400/10 group-hover:bg-green-400/20 transition-colors duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-green-400 text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-green-200">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-green-900/50 text-green-300 border-green-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-500 text-black font-bold"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <GitBranch className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="relative z-10 py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-400 mb-4">
              <span className="text-green-300">$</span> which tools
            </h2>
            <p className="text-green-200">My tech stack and tools</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-black/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-6">
                  <tool.icon className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h3 className="text-green-400 font-semibold mb-1">{tool.name}</h3>
                  <p className="text-green-300 text-xs">{tool.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            <span className="text-green-300">$</span> contact --init
          </h2>
          <p className="text-green-200 mb-8">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-black/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-6" onClick={() => window.open('https://github.com/gorstak17', '_blank')}>
                <Terminal className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:text-green-300 transition-colors" />
                <h3 className="text-green-400 font-semibold mb-2 group-hover:text-green-300 transition-colors">GitHub</h3>
                <p className="text-green-200 text-sm group-hover:text-green-100 transition-colors">github.com/gorstak17</p>
                <div className="mt-2 text-xs text-green-400/60 group-hover:text-green-400 transition-colors">
                  Click to visit →
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-6" onClick={() => window.open('https://linkedin.com/in/aleksandar-lončar', '_blank')}>
                <Server className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:text-green-300 transition-colors" />
                <h3 className="text-green-400 font-semibold mb-2 group-hover:text-green-300 transition-colors">LinkedIn</h3>
                <p className="text-green-200 text-sm group-hover:text-green-100 transition-colors">linkedin.com/in/aleksandar-lončar</p>
                <div className="mt-2 text-xs text-green-400/60 group-hover:text-green-400 transition-colors">
                  Click to visit →
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-6" onClick={() => window.open('mailto:loncar.aco@gmail.com', '_blank')}>
                <Code className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:text-green-300 transition-colors" />
                <h3 className="text-green-400 font-semibold mb-2 group-hover:text-green-300 transition-colors">Email</h3>
                <p className="text-green-200 text-sm group-hover:text-green-100 transition-colors">loncar.aco@gmail.com</p>
                <div className="mt-2 text-xs text-green-400/60 group-hover:text-green-400 transition-colors">
                  Click to email →
                </div>
              </CardContent>
            </Card>
          </div>

          <Button 
            className="bg-green-600 hover:bg-green-500 text-black font-bold px-8 py-3 border border-green-400"
            onClick={() => window.open('mailto:loncar.aco@gmail.com', '_blank')}
          >
            <Zap className="w-4 h-4 mr-2" />
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-500/20 bg-black/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green-300">
            <span className="text-green-400">$</span> echo "Built with ❤️ and lots of ☕"
          </p>
          <p className="text-green-200 text-sm mt-2">
            © 2025 Aleksandar Lončar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
