import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  toyota,
  lindbergh,
  express,
  csharp,
  framer,
  github,
  githubb,
  bootstrap,
  asp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: " Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "Github",
    icon: githubb,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "ASP.NET Core",
    icon: asp,
  },
];

const experiences = [
  {
    title: "Porter",
    company_name: "Lou Fusz Toyota",
    icon: toyota,
    iconBg: "#808080",
    date: "May 2021 - Present",
    points: [
      "Clean and prepare vehicles for customer delivery or service department use, including washing, vacuuming, and detailing the interior and exterior.",
      "Assist with vehicle transportation, such as moving cars to different locations on the dealership lot or delivering vehicles to customers' homes or workplaces.",
      "Perform basic maintenance tasks, such as checking and filling fluids, replacing light bulbs, and inflating tires.",
      "Ensure the lot and service areas are organized and clean, and may assist with other tasks as needed by the dealership or service department.",
    ],
  },
  {
    title: "Help Desk Specialist",
    company_name: "Lindbergh",
    icon: lindbergh,
    iconBg: "#006338",
    date: "August 2020 - May 2021",
    points: [
      "Provide technical support and assistance to end-users, such as troubleshooting software or hardware issues, resolving connectivity problems, and answering questions about applications or systems.",
      "Log and track support requests, including documenting issues and resolutions in a ticketing system or other database.",
      "Communicate with end-users via phone, email, or chat to gather information about their technical issues, provide updates on the status of their requests, and offer guidance on how to prevent similar problems in the future.",
      "Collaborate with other IT staff, such as students and teachers, to escalate and resolve issues, test new systems or upgrades, and share knowledge.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
