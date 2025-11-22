import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { Project, Education, Certification, Skill, SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "Jubin T Joseph",
  role: "Full Stack Developer | Software Engineer",
  location: "Chengannur, Kerala",
  email: "jubintjoseph7733@gmail.com",
  phone: "+91 9645429211",
  summary: "Final-year B.Tech Computer Science and Engineering student with strong expertise in full-stack development, automation, and AI-assisted applications. Skilled in building scalable web systems using Python, React, and Node.js, and experienced in IoT integration, API development, and workflow automation using n8n.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/jubin217", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com/in/jubin-t-joseph", icon: Linkedin },
  { name: "Instagram", url: "https://www.instagram.com/jubin_.t._joseph/", icon: Instagram },
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
];

export const SKILLS: Skill[] = [
  // Languages
  { name: "Python", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "C", category: "Language" },
  { name: "HTML5", category: "Language" },
  { name: "CSS3", category: "Language" },
  // Frameworks
  { name: "React", category: "Framework" },
  { name: "Node.js", category: "Framework" },
  { name: "Express", category: "Framework" },
  { name: "Angular", category: "Framework" },
  // Tools
  { name: "Git", category: "Tool" },
  { name: "Docker", category: "Tool" },
  { name: "VS Code", category: "Tool" },
  // Concepts
  { name: "REST APIs", category: "Concept" },
  { name: "Automation (n8n)", category: "Concept" },
  { name: "Prompt Engineering", category: "Concept" },
  { name: "IoT Integration", category: "Concept" },
  { name: "Microservices", category: "Concept" },
];

export const PROJECTS: Project[] = [
  {
    title: "Guardian AI – Fall Detection System",
    description: "IoT-based detection network using Raspberry Pi, ESP32-CAM & GSM module. Achieved ~95% accuracy and real-time caregiver alerts during emergencies.",
    tags: ["IoT", "Python", "Raspberry Pi", "AI", "Hardware"],
    links: { github: "https://github.com/jubin217/Guardian-AI" },
    image: "https://picsum.photos/seed/guardian/800/600",
    date: "Jun 2025 – Present"
  },
  {
    title: "ToolsHub – Developer Utility Platform",
    description: "Designing a modular platform integrating essential dev tools with React, Node.js, and n8n automation flows.",
    tags: ["React", "Node.js", "n8n", "Automation", "Full Stack"],
    links: { github: "https://github.com/jubin217" },
    image: "https://picsum.photos/seed/toolshub/800/600",
    date: "Sep 2025 – Present"
  },
  {
    title: "Jarvis AI Assistant",
    description: "Developed a Python-based voice/web assistant for speech recognition, API integration & workflow automation.",
    tags: ["Python", "AI", "Speech Recognition", "API"],
    links: { github: "https://github.com/jubin217/JarvisAI" },
    image: "https://picsum.photos/seed/jarvis/800/600",
    date: "Nov 2024 – Jan 2025"
  },
  {
    title: "Automated Timetable Generator",
    description: "Built a web tool that automated college timetable creation, reducing manual effort by 90%.",
    tags: ["HTML", "CSS", "JavaScript", "Algorithms"],
    links: { github: "https://github.com/jubin217" },
    image: "https://picsum.photos/seed/timetable/800/600",
    date: "Jun 2024 – Dec 2024"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Sree Buddha College of Engineering",
    location: "Pattoor, Alappuzha",
    period: "Oct 2022 – Present",
    score: "CGPA: 7.79"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Problem Solving through Programming in C", issuer: "NPTEL", year: "2023" },
  { title: "Cyber Security Internship", issuer: "Internship", year: "2024" },
  { title: "Bug Bounty Internship", issuer: "Internship", year: "2025" },
];

export const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];