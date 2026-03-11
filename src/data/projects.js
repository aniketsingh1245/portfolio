/**
 * projects.js — Single source of truth for all portfolio projects.
 *
 * ─────────────────────────────────────────────────────────────────────
 *  HOW TO ADD / EDIT / REMOVE PROJECTS
 * ─────────────────────────────────────────────────────────────────────
 *
 *  ADD:    Copy one object block, paste at the end of the array, fill in your details.
 *  EDIT:   Change any field value in the corresponding object.
 *  REMOVE: Delete the entire object block (including the surrounding { }).
 *
 *  Fields:
 *    title       (string)   — Project name shown as the card heading.
 *    description (string)   — Short paragraph description shown on the card.
 *    tech        (string[]) — Array of tech/tool names rendered as pill tags.
 *    github      (string)   — Full GitHub URL. Use "" to hide the button.
 *    demo        (string)   — Live demo URL. Use "" to hide the button.
 *    image       (string)   — Path relative to /public, e.g. "/images/fraud.png".
 *                             Use "" to show the default gradient placeholder.
 *    featured    (boolean)  — Optional. Set true to show a "Featured" badge.
 *    status      (string)   — Optional. e.g. "Live", "In Progress", "Archived".
 *    tagColor    (string)   — Optional. "blue" | "green" | "amber" | "pink"
 *                             Controls the color of the tech pill tags.
 * ─────────────────────────────────────────────────────────────────────
 */

export const projects = [
  {
    title: "AI Fraud Detection System",
    description:
      "End-to-end machine learning pipeline that detects financial fraud in real time. Features a FastAPI backend serving a trained Scikit-learn model with sub-100ms prediction latency, interactive REST API docs, and a dashboard for monitoring transaction anomalies.",
    tech: ["Python", "FastAPI", "Scikit-learn", "Pandas", "Docker", "SQL"],
    github: "https://github.com/aniketsingh1245/ai-fraud-detection-system",
    demo: "",
    image: "/images/fraud.png",
    featured: true,
    status: "Live",
    tagColor: "blue",
  },
  {
    title: "Scuba Diving Web Platform",
    description:
      "Full-stack platform connecting divers with dive sites worldwide. Built with React on the frontend and Flask on the backend, featuring dynamic location data, user authentication, site reviews, and real-time conditions pulled from weather APIs.",
    tech: ["React", "Flask", "Python", "PostgreSQL", "Tailwind CSS", "REST API"],
    github: "https://github.com/aniketsingh1245/scuba-app",
    demo: "",
    image: "/images/scuba.png",
    featured: true,
    status: "In Progress",
    tagColor: "green",
  },
  {
    title: "Jarvis AI Assistant",
    description:
      "JARVIS-inspired AI voice assistant for desktop automation. Uses speech recognition and pyttsx3 TTS to accept voice commands, control system settings, open applications, search the web, and answer questions via an integrated language model.",
    tech: ["Python", "OpenAI API", "Speech Recognition", "pyttsx3", "Tkinter"],
    github: "https://github.com/aniketsingh1245/toxic-ai-jarvis-assistant",
    demo: "",
    image: "/images/jarvis.png",
    featured: false,
    status: "Live",
    tagColor: "pink",
  },

  // ─── PASTE NEW PROJECTS BELOW THIS LINE ────────────────────────────
  // {
  //   title: "Your New Project",
  //   description: "A short description of what this project does.",
  //   tech: ["React", "Node.js", "MongoDB"],
  //   github: "https://github.com/yourusername/new-project",
  //   demo: "https://your-demo.vercel.app",
  //   image: "/images/new-project.png",
  //   featured: false,
  //   status: "Live",
  //   tagColor: "amber",
  // },
];
