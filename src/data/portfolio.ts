import mochiImg from "@/assets/project-mochi.jpg";
import gestureImg from "@/assets/project-gesture.jpg";
import healthImg from "@/assets/project-health.jpg";
import chatImg from "@/assets/project-chat.jpg";

export const profile = {
  name: "Souradip Roy Chowdhury",
  role: "Computer Science & Engineering Student | AI & Web Developer | Frontend Developer | AI Assistant & Chatbot Developer",
  email: "souradiproychowdhury@gmail.com",
  phone: "+91-9749258727",
  location: "India",
  github: "https://github.com/souradiproychowdhury-cpu",
  linkedin: "https://linkedin.com/in/Souradip-Roy-Chowdhury",
};

export const services = [
  {
    no: "01",
    title: "Web Development",
    body: "Modern, responsive websites and web applications using contemporary web technologies.",
    more: "From layout architecture to deployment-ready builds, with performance and accessibility in mind.",
  },
  {
    no: "02",
    title: "Frontend Development",
    body: "Interactive and responsive interfaces using HTML, CSS, JavaScript, and React.js.",
    more: "Component-based architecture, state handling, and polished micro-interactions.",
  },
  {
    no: "03",
    title: "Chatbot Development",
    body: "Intelligent conversational interfaces capable of integrating AI/LLM technologies and modern web experiences.",
    more: "Prompt design, API integration, conversation state, and friendly UI surfaces.",
  },
  {
    no: "04",
    title: "AI Assistant Development",
    body: "Development of intelligent AI assistants such as Mochi, combining conversational AI with useful real-world capabilities.",
    more: "Voice interaction, device APIs, camera analysis, and helpful everyday utilities.",
  },
];

export const skillGroups = [
  {
    title: "Frontend Development",
    items: ["HTML5", "CSS3", "React.js", "Responsive Web Design"],
  },
  { title: "Programming", items: ["Python", "Java", "JavaScript"] },
  {
    title: "Web Technologies",
    items: ["DOM Manipulation", "RESTful APIs", "Component-Based Architecture"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Natural Language Processing",
      "Gesture Recognition",
      "Chatbot Development",
      "AI/LLM Integration",
    ],
  },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Google Colab"] },
  { title: "Database", items: ["Basic SQL", "Firebase"] },
];

export type Project = {
  slug: string;
  no: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  future: string[];
};

export const projects: Project[] = [
  {
    slug: "mochi",
    no: "01",
    title: "Mochi: AI Virtual Companion",
    tagline: "Voice-driven AI companion inside a cute animated cat interface",
    image: mochiImg,
    description:
      "Mochi is an interactive AI virtual companion that combines voice interaction, AI assistance, camera analysis, weather, news, navigation, music, calendar functionality, emergency assistance, and useful device features inside a cute animated cat interface.",
    problem:
      "Everyday assistants feel mechanical, and useful capabilities are scattered across many separate apps.",
    solution:
      "A single expressive companion that talks, sees, and acts — wrapping AI conversation and real-world utilities in a playful animated character.",
    features: [
      "Voice-based AI conversations",
      "Claude AI integration",
      "AI camera / image analysis",
      "Live weather",
      "News headlines",
      "Google Maps directions",
      "YouTube and Spotify integration",
      "Interactive calendar",
      "Emergency assistance",
      "Device information",
      "Animated draggable AI companion",
      "Blinking, talking and dancing animations",
      "Responsive desktop / mobile experience",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express",
      "Claude API",
      "Open-Meteo",
      "Google Maps",
      "Browser Web APIs",
    ],
    future: [
      "Offline command fallbacks",
      "Long-term memory for conversations",
      "Companion personality customisation",
    ],
  },
  {
    slug: "gestureai",
    no: "02",
    title: "GestureAI",
    tagline: "3D gesture control meets an intelligent Q&A engine",
    image: gestureImg,
    description:
      "GestureAI is an AI-powered interactive application combining 3D gesture control with intelligent AI-powered Question & Answer capabilities.",
    problem:
      "Keyboard and mouse input limits how naturally people can explore information in spatial interfaces.",
    solution:
      "Real-time hand tracking drives a 3D interface, while an AI Q&A engine backed by Wikipedia answers questions on the fly.",
    features: [
      "3D gesture control",
      "Hand gesture recognition",
      "AI Q&A engine",
      "Wikipedia knowledge integration",
      "Real-time interaction",
      "Interactive UI",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Gesture Recognition",
      "AI/LLM APIs",
      "Wikipedia API",
    ],
    future: [
      "Custom gesture training",
      "Multi-hand interaction",
      "Voice + gesture hybrid control",
    ],
  },
  {
    slug: "healthai",
    no: "03",
    title: "HealthAI — Smart Healthcare App",
    tagline: "Full-stack health platform with AI assistance and tracking",
    image: healthImg,
    description:
      "HealthAI is a full-stack smart healthcare platform combining AI-powered health assistance, health tracking, report analysis, medicine reminders, appointments, and emergency functionality.",
    problem:
      "Health data, reminders, reports and emergency contacts usually live in disconnected places.",
    solution:
      "One authenticated dashboard that tracks daily health signals, analyses reports with AI, and keeps emergency help one tap away.",
    features: [
      "Authentication",
      "Health dashboard",
      "BMI tracking",
      "Water tracking",
      "Sleep tracking",
      "Medicine reminders",
      "AI health chatbot",
      "Voice support",
      "Blood report analysis",
      "Doctor appointments",
      "Emergency SOS",
      "Geolocation",
      "Emergency contacts",
      "User profile",
    ],
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "Recharts",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Groq/Llama",
      "OpenRouter",
    ],
    future: [
      "Wearable device sync",
      "Care-team sharing",
      "Multi-language health chat",
    ],
  },
  {
    slug: "chat-interface",
    no: "04",
    title: "Chat Interface",
    tagline: "Modern real-time messaging UI built with vanilla web tech",
    image: chatImg,
    description:
      "A modern real-time messaging interface inspired by contemporary messaging platforms, supporting text communication, image sharing, voice messages, emoji interactions, and responsive layouts.",
    problem:
      "Messaging UIs look simple but demand careful layout, media handling and responsive behaviour.",
    solution:
      "A clean, dependency-free messaging interface that handles text, media, and voice with a responsive modern layout.",
    features: [
      "Real-time chat interface",
      "Image sharing",
      "Voice messages",
      "Emoji support",
      "Responsive design",
      "Modern messaging UI",
    ],
    tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
    future: ["Message search", "Threaded replies", "End-to-end encryption"],
  },
];

export const timeline = [
  {
    year: "2024",
    title: "Started B.Tech in Computer Science & Engineering",
    body: "Techno Institute of Engineering and Management, Ashoknagar, West Bengal.",
  },
  {
    year: "2025",
    title: "Internal Hackathon Winner",
    body: "Built and shipped a working solution under time pressure with a team.",
  },
  {
    year: "2025",
    title: "AI project streak",
    body: "Mochi, GestureAI and HealthAI — assistants, gesture interfaces and health tech.",
  },
  {
    year: "2028",
    title: "Expected graduation",
    body: "Continuing to build AI-driven, interactive web products.",
  },
];
