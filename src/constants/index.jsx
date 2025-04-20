import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandBootstrap,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandSass,
  TbBrandNodejs,
  TbBrandPhp,
  TbBrandMongodb,
  TbBrandRedux,
  TbBrandDocker,
} from "react-icons/tb";
import {
  SiMongodb,
  SiWordpress,
  SiDrupal,
  SiJoomla,
  SiMagento,
  SiSanity,
  SiMysql,
  SiJquery,
  SiAxios,
  SiCypress,
  SiLess,
  SiAdobe,
  SiGoogleanalytics,
  SiStrapi,
  SiGrunt,
  SiGulp,
  SiWebpack,
} from "react-icons/si";
import { DiRedis, DiDatabase, DiMsqlServer } from "react-icons/di";
import {
  FaNodeJs,
  FaReact,
  FaJsSquare,
  FaDatabase,
  FaAccessibleIcon,
  FaFlask,
} from "react-icons/fa";
import { BiLogoPostgresql, BiData } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "MAGESHKUMAR RAJENDIRAN",
  greet: "Hello there! 👋🏻",
  description: [
    "I'm a Senior AEM Frontend Developer and UI Lead based in London, with over 14 years of experience crafting robust digital solutions for some of the world's top enterprises — including Lloyds Bank, Shell, and Visa. I specialise in Adobe Experience Manager (AEM), ReactJs, and performance-first frontend development.",

    "My journey began in web development using PHP and WordPress, and over the years, I've evolved into a specialist in building enterprise-level CMS-driven applications, including SPAs integrated with AEM, SAP Hybris, and Sanity.",

    "I bring a unique blend of technical expertise, user-centric design principles, and Agile team leadership to every project.",
  ],
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/rmageshkumar/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/rmageshkumar/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/rmageshkumar/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/rmageshkumar/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/rmageshkumar/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/rmageshkumar/chat-application",
  },
];

export const BIO = [
  "Hi, I'm Magesh Kumar R — a frontend developer who started his career in a small startup tucked away in a modest room in Bangalore. My early days were all about rolling up my sleeves, building WordPress sites and PHP apps, and learning by doing. With every line of code, my curiosity deepened — and so did my passion for clean, functional, and user-focused development.",

  "Over the last 14+ years, I've grown from those humble beginnings into leading frontend development for enterprise clients like Lloyds Bank, Shell, and Visa. I've delivered scalable applications using AEM, React, and modern web stacks — always with a focus on performance, accessibility, and user experience.",

  "Outside of work, I stay up to date with evolving tech trends, constantly learning and experimenting through side projects and prototyping. I thrive in collaborative environments and enjoy transforming complex requirements into intuitive digital experiences. I'm currently exploring opportunities to contribute to impactful products and forward-thinking teams.",
];

export const SKILLS = [
  // Frontend Technologies
  {
    icon: <FaJsSquare className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript ES6+",
    experience: "14+ years",
    category: "Frontend",
    proficiency: 95, // percentage of proficiency
  },
  {
    icon: <FaReact className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "5+ years",
    category: "Frontend",
    proficiency: 90,
  },
  {
    icon: <TbBrandRedux className="text-4xl text-purple-500 lg:text-5xl" />,
    name: "Redux",
    experience: "4+ years",
    category: "Frontend",
  },
  {
    icon: <SiJquery className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "jQuery",
    experience: "10+ years",
    category: "Frontend",
  },
  {
    icon: <TbBrandHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML5",
    experience: "14+ years",
    category: "Frontend",
  },
  {
    icon: <TbBrandCss3 className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS3",
    experience: "14+ years",
    category: "Frontend",
  },
  {
    icon: <TbBrandSass className="text-4xl text-pink-500 lg:text-5xl" />,
    name: "SASS",
    experience: "8+ years",
    category: "Frontend",
  },
  {
    icon: <SiLess className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "LESS",
    experience: "8+ years",
    category: "Frontend",
  },
  {
    icon: <TbBrandBootstrap className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "10+ years",
    category: "Frontend",
  },
  {
    icon: <TbBrandTailwind className="text-4xl text-cyan-500 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "3+ years",
    category: "Frontend",
  },

  // CMS Systems
  {
    icon: <SiAdobe className="text-4xl text-red-600 lg:text-5xl" />,
    name: "AEM",
    experience: "7+ years",
    category: "CMS",
  },
  {
    icon: <SiWordpress className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "WordPress",
    experience: "10+ years",
    category: "CMS",
  },
  {
    icon: <SiDrupal className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Drupal",
    experience: "8+ years",
    category: "CMS",
  },
  {
    icon: <SiJoomla className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Joomla",
    experience: "6+ years",
    category: "CMS",
  },
  {
    icon: <SiMagento className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Magento",
    experience: "5+ years",
    category: "CMS",
  },
  {
    icon: <SiSanity className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Sanity",
    experience: "2+ years",
    category: "CMS",
  },
  {
    icon: <SiStrapi className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Strapi",
    experience: "2+ years",
    category: "CMS",
  },

  // Build Tools & Performance
  {
    icon: <SiGrunt className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Grunt",
    experience: "5+ years",
    category: "Build Tools",
  },
  {
    icon: <SiGulp className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Gulp",
    experience: "6+ years",
    category: "Build Tools",
  },
  {
    icon: <SiWebpack className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Webpack",
    experience: "5+ years",
    category: "Build Tools",
  },

  // Accessibility & Testing
  {
    icon: <FaAccessibleIcon className="text-4xl text-green-600 lg:text-5xl" />,
    name: "A11y/Accessibility",
    experience: "6+ years",
    category: "Accessibility",
  },
  {
    icon: <FaFlask className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "A/B Testing",
    experience: "4+ years",
    category: "Testing",
  },

  // Backend & Tools
  {
    icon: <TbBrandNodejs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "4+ years",
    category: "Backend",
  },
  {
    icon: <TbBrandPhp className="text-4xl text-purple-400 lg:text-5xl" />,
    name: "PHP",
    experience: "10+ years",
    category: "Backend",
  },
  {
    icon: <SiAxios className="text-4xl text-gray-600 lg:text-5xl" />,
    name: "Axios",
    experience: "4+ years",
    category: "Tools",
  },
  {
    icon: <SiCypress className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Cypress",
    experience: "3+ years",
    category: "Testing",
  },

  // Databases
  {
    icon: <SiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "MySQL",
    experience: "10+ years",
    category: "Database",
  },
  {
    icon: <DiMsqlServer className="text-4xl text-red-500 lg:text-5xl" />,
    name: "SQL Server",
    experience: "5+ years",
    category: "Database",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "3+ years",
    category: "Database",
  },

  // Analytics & DevOps
  {
    icon: <SiAdobe className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Adobe Analytics",
    experience: "5+ years",
    category: "Analytics",
  },
  {
    icon: (
      <SiGoogleanalytics className="text-4xl text-yellow-500 lg:text-5xl" />
    ),
    name: "Google Analytics",
    experience: "7+ years",
    category: "Analytics",
  },
  {
    icon: <TbBrandDocker className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Docker",
    experience: "3+ years",
    category: "DevOps",
  },
];
export const EXPERIENCES = [
  {
    title: "Tech Lead - AEM Developer",
    company: "Wipro Limited / Leading Bank, London, UK",
    duration: "Oct 2018 - Present",
    description:
      "Leading frontend development for enterprise-grade Adobe Experience Manager (AEM) applications, integrating React-based SPAs and microservices. Spearheaded the migration from AEM On-Premise to AEMaaCS, refactoring frontend architecture into a scalable monorepo setup. Delivered 100% WCAG-compliant components, optimized Webpack performance, and embedded Adobe Analytics to enhance data-driven insights. Fostered Agile methodologies with cross-functional teams, driving continuous integration (CI) and continuous deployment (CD) pipelines to enhance productivity. ",
    skills: [
      "AEM",
      "React.js",
      "Webpack",
      "Adobe Analytics",
      "Microservices",
      "WCAG Compliance",
      "CI/CD",
      "Agile",
      "SPA Architecture",
      "Version Control (Git)",
    ],
  },
  {
    title: "UI Lead - DSM",
    company: "Wipro Limited, Sittard, Netherlands",
    duration: "Feb 2018 - Oct 2018",
    description:
      "Led a 7-member frontend team, developed and maintained scalable AEM components, integrated backend APIs, and ensured alignment with W3C standards for responsive design and accessibility. Focused on high-performance UI architecture and design consistency across DSM's global platform. Implemented advanced JavaScript frameworks for dynamic content loading and collaborated with the backend team to ensure seamless integration and data flow.",
    skills: [
      "AEM",
      "JavaScript",
      "W3C Standards",
      "UI/UX Design",
      "Cross-Browser Compatibility",
      "Responsive Design",
      "Performance Optimization",
      "HTML5/CSS3",
    ],
  },
  {
    title: "Frontend Developer - Pulsar for Salesforce",
    company: "Anonymous Client",
    duration: "Date Range TBD",
    description:
      "Developed a cross-platform solution to enable offline access to Salesforce data on iOS, Android, and Windows using Pulsar. Implemented features for syncing data across devices, optimizing performance for mobile and desktop platforms, and ensuring secure offline data storage. Enhanced user experience with seamless transitions between online and offline modes, and integrated with Salesforce APIs for real-time data updates.",
    skills: [
      "Pulsar for Salesforce",
      "iOS Development",
      "Android Development",
      "Windows Development",
      "Cross-Platform Development",
      "Offline Data Syncing",
      "Salesforce API Integration",
      "Mobile Performance Optimization",
      "Secure Data Storage",
    ],
  },
  {
    title: "Tech Lead - Leading Petroluem company",
    company: "Wipro Limited, Bangalore, India",
    duration: "Jul 2017 - Jan 2018",
    description:
      "Led a 15-member team to integrate AEM with SAP Hybris, delivering CMS-driven ecommerce interfaces. Contributed to performance improvements and reusable UI component architecture across Shell's digital ecosystem. Worked on improving search and recommendation systems, enhancing customer engagement and content management. Optimized frontend code to reduce loading times and improve overall user experience. Delivered solutions aligned with Shell's global brand guidelines and tech stack.",
    skills: [
      "AEM",
      "SAP Hybris",
      "Ecommerce Solutions",
      "Frontend Optimization",
      "UI Component Architecture",
      "Search & Recommendation Systems",
      "Agile Methodology",
      "Performance Tuning",
    ],
  },
  {
    title: "UI Lead - Leading Payments company",
    company: "Wipro Limited (Contract), Bangalore, India",
    duration: "Dec 2015 - Jun 2017",
    description:
      "Led frontend development for VISA's internal portals, integrating AEM with Salesforce and driving UX improvements. Collaborated with cross-functional teams, including UX/UI designers and backend developers, to create maintainable, responsive, and high-performing web interfaces. Focused on accessibility, usability, and scalability, ensuring the platform met strict security and compliance standards required by VISA. Delivered real-time data integration with internal systems to enhance workflow efficiency.",
    skills: [
      "AEM",
      "Salesforce Integration",
      "UX/UI Design",
      "Web Accessibility",
      "Responsive Web Design",
      "Cross-Functional Team Collaboration",
      "Data Integration",
      "Security & Compliance",
    ],
  },
  {
    title: "UI Lead - Leading Payments company",
    company: "Wipro Limited (Contract), Bangalore, India",
    duration: "Feb 2015 - Nov 2015",
    description:
      "Migrated legacy PHP platforms to AEM, developed custom components using Sightly/HTL, and led a team of 8 developers to modernize Cybersource's digital presence. Implemented reusable templates, improved content authoring flexibility, and integrated advanced features for fraud detection and risk management. Enhanced site performance through component-level optimizations and cross-browser compatibility fixes.",
    skills: [
      "AEM",
      "Sightly/HTL",
      "PHP",
      "Template Development",
      "Content Authoring",
      "Fraud Detection Integration",
      "Risk Management",
      "Performance Optimization",
      "Cross-Browser Compatibility",
    ],
  },
  {
    title: "Sr. PHP Developer",
    company: "Cirrologix Technologies Pvt Ltd, Bangalore, India",
    duration: "Jan 2013 - Feb 2015",
    description:
      "Built telemarketing and business web applications using PHP, MySQL, and jQuery. Developed and maintained client websites using WordPress and Drupal, focusing on performance, SEO optimization, and UI usability. Led the development of CRM systems and reporting tools, ensuring a seamless user experience and backend functionality. Implemented custom WordPress plugins to meet specific client requirements.",
    skills: [
      "PHP",
      "MySQL",
      "jQuery",
      "WordPress",
      "Drupal",
      "SEO Optimization",
      "Custom Plugin Development",
      "CRM Development",
      "Performance Tuning",
      "Salesforce",
      "Salesforce Leadforms and Pulser Integration",
    ],
  },
  {
    title: "Technical Lead",
    company: "Comx Technologies, Bangalore, India",
    duration: "Nov 2011 - Dec 2012",
    description:
      "Developed and deployed ecommerce websites using Magento, WooCommerce, and Prestashop. Led a small team of developers and created an in-house CMS with PHP and MySQL for rapid client deployments. Streamlined the order management process and integrated third-party payment gateways to enhance ecommerce functionality. Worked with the design team to ensure websites met client branding and functionality requirements.",
    skills: [
      "Magento",
      "WooCommerce",
      "Prestashop",
      "PHP",
      "MySQL",
      "Ecommerce Development",
      "Payment Gateway Integration",
      "CMS Development",
      "Team Leadership",
    ],
  },
  {
    title: "Web Developer",
    company: "Webgaints Softtech Pvt Ltd, Bangalore, India",
    duration: "Oct 2010 - Oct 2011",
    description:
      "Designed and developed CMS-based websites using Joomla, Drupal, and WordPress. Focused on delivering responsive, SEO-friendly layouts tailored for small business clients. Worked closely with clients to understand their business needs and provided tailored solutions. Managed website updates and optimizations to improve load times and user experience.",
    skills: [
      "Joomla",
      "Drupal",
      "WordPress",
      "Responsive Design",
      "SEO Optimization",
      "Client Interaction",
      "Website Optimization",
    ],
  },
];
// export const EXPERIENCES = [
//   {
//     title: "Lead Frontend Developer",
//     company: "Innovative Tech Solutions",
//     duration: "July 2020 - Present",
//     description:
//       "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
//   },
//   {
//     title: "Frontend Engineer",
//     company: "Digital Creations",
//     duration: "February 2016 - June 2020",
//     description:
//       "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
//   },
//   {
//     title: "Junior Web Developer",
//     company: "Bright Future Technologies",
//     duration: "August 2014 - January 2016",
//     description:
//       "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
//   },
// ];

export const EDUCATION = [
  // {
  //   degree: "Master of Science in Computer Science",
  //   institution: "Stanford University",
  //   duration: "September 2012 - June 2014",
  //   description:
  //     "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  // },
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Anna University, India",
    duration: "September 2004 - June 2008",
    description:
      "Where he gained a strong foundation in computer science, programming, and systems design. The program equipped him with the technical skills and problem-solving abilities necessary to excel in software development and IT solutions. Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

export const PROJECT_PLANNING = [
  {
    phase: "PROCESS",
    description:
      "My skill-set spans across most internet technologies in use currently, meeting the ever-growing need of my clients.",
  },
  {
    phase: "IDEA",
    description:
      "The initial stage where innovative ideas are generated based on client requirements and market analysis to deliver impactful solutions.",
  },
  {
    phase: "PLANNING",
    description:
      "Detailed project planning is undertaken, including defining goals, timelines, resource allocation, and risk management strategies.",
  },
  {
    phase: "DESIGN",
    description:
      "The design phase focuses on user experience, interface design, system architecture, and the overall look and feel of the product.",
  },
  {
    phase: "DEVELOP",
    description:
      "The development phase where the project is built based on the design, employing the latest technologies and best practices in coding.",
  },
  {
    phase: "TEST",
    description:
      "Thorough testing is carried out to ensure the product is bug-free, meets quality standards, and aligns with the project requirements.",
  },
  {
    phase: "LAUNCH",
    description:
      "The final product is deployed and launched, ensuring smooth integration with the existing systems and achieving client satisfaction.",
  },
];
