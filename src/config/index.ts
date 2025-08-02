import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Shiv Shankar Sahoo — Software Developer",
  author: "Shiv Shankar Sahoo",
  description:
    "Software Engineer with 2+ years of experience building full-stack SaaS products from 0 to 1. I’ve worked across three startups, leading the development of modern, high-performance web apps using React, TypeScript, Node.js, and Kafka. I thrive at the intersection of product thinking, clean UI, and scalable backend systems.",
  lang: "en",
  siteLogo: "/shiv_image.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/shivshankar22/" },
    { text: "Github", href: "https://github.com/onlyshiv" },
    { text: "Leetcode", href: "https://leetcode.com/u/F2aD1RoNyi/" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Shiv Sahoo",
    specialty: "Software Developer",
    summary:
        "Software Engineer with 2+ years of experience building full-stack SaaS products from 0 to 1. I’ve worked across three startups, leading the development of modern, high-performance web apps using React, TypeScript, Node.js, and Kafka. I thrive at the intersection of product thinking, clean UI, and scalable backend systems.",
    email: "shivsahoo44@gmail.com",
  },
  experience: [
   {
    company: "HNAK",
    position: "Software Engineer",
    startDate: "June 2023",
    endDate: "Present",
    summary: [
      "Led the development of a centralized admin panel using Next.js, Node.js, and Tailwind CSS, managing inventory, offers, and AI-generated content across four storefronts. This unified interface boosted operational efficiency by 40% and cross-team collaboration by 50%.",
      "Integrated OpenAI's GPT API to automate product content generation from Oracle data, reducing manual effort by 80% and accelerating product onboarding by 3× across multiple channels.",
      "Reduced frontend bundle size from 12MB to 2MB, resulting in 70% faster load times and significantly improved user experience and retention.",
      "Created a high-impact reviews module that tripled user-generated content and increased conversion rates by 12%, enhancing trust and engagement.",
      "Implemented real-time data updates and campaign automation using Kafka-based cron jobs and scalable webhooks, improving reliability to 99.9% across SMS, email, and WhatsApp notifications.",
      "Built a scalable user segmentation system using worker threads and deduplication, boosting processing speed by 60% and enabling precise event-based targeting.",
      "Contributed end-to-end on UI design, state management, and performance tuning, making the frontend highly responsive, maintainable, and scalable."
    ],
  }
  ],
  projects: [
   
    {
      name: "Notionize",
      summary: "Notion-style workspace UI built with React, Tailwind CSS, and Vite.",
      linkPreview: "https://notionize-nine.vercel.app/",
      linkSource: "https://github.com/onlyshiv/Notionize",
      image: "/notion-page.jpg",
    },
     {
      name: "Spotify Clone",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
  ],
  about: {
    description:
    'I’m <strong>Shivshankar Sahoo</strong>, a Full-Stack Developer skilled in building modern web applications using ' +
    'JavaScript, TypeScript, React, Next.js, Tailwind CSS, and ShadCN. I create clean, responsive interfaces with a strong eye for detail and performance.<br><br>' +
    'On the backend, I work with Node.js, Express.js, Spring Boot, Kafka, and microservices, developing scalable systems and automation pipelines. ' +
    'I have hands-on experience with MongoDB, MySQL, PostgreSQL, Redis, Docker, Firebase, and CI/CD workflows.<br><br>' +
    'Whether it\'s crafting seamless UI experiences or engineering robust backend systems, I focus on delivering high-impact, production-ready solutions that scale.',
    image: "/shiv_image.jpg",
  },
};

// #5755ff
