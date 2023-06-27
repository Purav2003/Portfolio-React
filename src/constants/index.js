import {
  mobile,
  backend,
  creator,
  web,
  data,
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
  webmavens,
  threejs,
  bootstrap,
  python,
  django,
  java,
  mysql,
  r,
  linux,
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  project_6,
  link
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: data,
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
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "python",
    icon: python,
  },

  {
    name: "django",
    icon: django,
  },
  {
    name: "r",
    icon: r,
  }
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Web Mavens",
    icon: webmavens,
    iconBg: "#383E56",
    date: "April 2022 - June 2022",
    points: [
      "Developing and maintaining web applications using HTML,CSS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Netlfix Clone",
    description:
      "ReactJS-based web application. Which includes functionalities like search, adding to a watchlist, movie/series descriptions, trailers, and similar content suggestions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project_1,
    source_code_link: "https://github.com/Purav2003/Netflix-clone-react",
  },
  {
    name: "Stock Exgange",
    description:
      "The project is a web application with live search, add to list, and stock description features made with ReactJS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },

    ],
    image: project_2,
    source_code_link: "https://github.com/Purav2003/StockExchange-React",
  },
  {
    name: "Calendly Clone",
    description:
      "This project is based on PHP. In this project I was responsible for the frontend part. In which I created using HTML, CSS, Tailwind.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: project_3,
    source_code_link: "https://calendly.webmavens.com/",
  },
  {
    name: "Online Medical Shop",
    description:
      "This website is based on HTML, CSS, Bootstrap and Advanced JAVA (JSP).In this website there are 2 modules. One is Admin module in which admin can Add, Delete, Modify products. In User side user can buy products from different categories.",
    tags: [
      {
        name: "advanced java",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },

    ],
    image: project_4,
    source_code_link: "https://github.com/Purav2003/Online_Medical_Shop/",
  },
  {
    name: "Complaint Management System",
    description:
      "Complaint management system is a Django based framework which can be used in a society for handling of various society complaints.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: project_5,
    source_code_link: "https://github.com/jinshah0322/Complaint-Management-System",
  },
  {
    name: "Heart Failure Prediction Model",
    description:
      "Heart Failure Prediction is implemented using IBM SPSS Modeler as well as using python code which predicts whether the patient will have heart failure based on given fields.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "IBM SPSS Modeler",
        color: "green-text-gradient",
      },
    ],
    image: project_6,
    source_code_link: "https://github.com/jinshah0322/Heart-Failure-Prediction",
  },
];

export { services, technologies, experiences, testimonials, projects };