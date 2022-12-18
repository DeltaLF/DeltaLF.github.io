import cert1 from "./resources/images/certificate/javascript_weired_part.jpg";
import cert2 from "./resources/images/certificate/modern_react.jpg";
import cert3 from "./resources/images/certificate/mysql_bootcamp.jpg";
import cert4 from "./resources/images/certificate/web_dev.jpg";
import cert5 from "./resources/images/certificate/web_dev_bootcamp.jpg";
import cert6 from "./resources/images/certificate/data_structure_and_algorithm.jpg";
import cert7 from "./resources/images/certificate/javascript_algorithms_and data_structures.jpg"
import cert8 from "./resources/images/certificate/complete_react.jpg";

import project1 from "./resources/images/project/onlineCourse.jpg";
import project2 from "./resources/images/project/videos.jpg";
import project3 from "./resources/images/project/yelpCamp.jpg";

import portrait from "./resources/images/me/me.jpg";

const seo = {
  title: "Patrick's Portfolio",
  description: "Hi I am Partick! I am learning coding now.",
  og: {
    title: "Patrick Tasi Portfolio",
    type: "website",
    url: "https://github.com/DeltaLF",
  },
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/DeltaLF",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
];

const header = {
  intro: "Hi, I'm Patrick Tsai, a Frontend developer",
};

const experience = [
  {
    date: "2021 - present",
    title: "Self-taught web developer",
    icon: "fab fa-js",
    jobDesc:
      "I take several Udemy web developer classes in my free time, and now I have finished 5 courses. Besides, some more classes are still undergoing. I also deploy 3 websites based on the knowledge I acquired.",
    skillList: ["javascript", "react", "html", "css"],
  },
  {
    date: "2018 - present",
    title: "Anti-Virus Analyst ",
    icon: "fab fa-python",
    jobDesc:
      "As an AV Analyst, I am mainly responsible for analyzing malicious samples with static, dynamics approaching and building corresponding signature files to detect those new virus mutations. Also, I conduct a side project to build a pipeline to automatically generate dynamical analysis reports based on python Airflow, and Cuckoo sandbox (an open-source automated malware analysis). With the reports, I then extract features from them and use python sklearn package to train a classifier which can help analysts pre-classify unknown samples to optimize our workflow. ",
    skillList: ["python", "airflow"],
  },
];

const aboutPage = {
  aboutMe: [
    "I am currently an anti-virus analyst who is responsible for analyzing malware. Besides the main duty, I also conduct side projects to optimize our daily workflow. Automatic samples classifier is what I am working on. While I am doing the side project, I gradually realize that creating something by coding brings me joy and sense of achievement. So I start to take online courses from Udemy. Now I am able to build websites with MERN stack after learning for a while. I am looking forward to becoming a web developer so I can bring what I have learned into practical work.",
    "In my free time, I love to go outdoor. Hiking, swimming, and biking are all my hobbies. Immersing myself in nature makes me feel peaceful. I believe work-life balance can improve emotional, mental health and work performance.",
  ],
  portaitPath: portrait,
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "ion-logo-python",
      style: {
        backgroundColor: "transparent",
        color: "#3776AB",
      },
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "simple-icons:html5",
      style: {
        color: "#E34F26",
      },
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fa-css3",
      style: {
        color: "#1572B6",
      },
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "simple-icons:javascript",
      style: {
        backgroundColor: "#000000",
        color: "#F7DF1E",
      },
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "simple-icons:node-dot-js",
      style: {
        color: "#339933",
      },
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "simple-icons:npm",
      style: {
        color: "#CB3837",
      },
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "simple-icons:mongodb",
      style: {
        color: "#47A248",
      },
    },
  ],
};

const project = [
  {
    title: "Online Course MERN project",
    imgPath: project1,
    url: "https://velvety-kulfi-650427.netlify.app",
    githubUrl: "https://github.com/DeltaLF/online-course",
    projectDesc:
      "Start from scratch to build an online learning website based on the MERN stack (MongoDB, Express, React, NodeJS). Authentication is implemented by jwt token. You can register an account to create courses, subscribe to courses, and put courses in the shop cart. Also, there is a new students promotion only existing for the new user for 5 hours which is implemented by localStorage.",
  },
  {
    title: "Yelp Camp Node Express project",
    imgPath: project3,
    url: "https://serene-eyrie-64689.herokuapp.com",
    githubUrl: "https://github.com/DeltaLF/yelpcamp-",
    projectDesc:
      "A project modified from The Web Developer Bootcamp. This site is built by node, express, ejs, and MongoDB atlas and it can be used to create and share camp information. I add some extra features that are passport Google login, review editable, middleware to check login status, user image schema, and function to delete a user.",
  },
  {
    title: "Video Search React project",
    imgPath: project2,
    url: "https://eloquent-bardeen-bfe74f.netlify.app/",
    githubUrl: "https://github.com/DeltaLF/video-app",
    projectDesc:
      "A React front-end website that can search youtube videos, and Wikipedia by making an API request. The API request is made through the Netlify serverless function to prevent the API key from being accessed directly.",
  },
];

const certificates = [
  { title: "Javascript", imgPath: cert1 },
  { title: "React", imgPath: cert2 },
  { title: "MsySQL", imgPath: cert3 },
  { title: "Full stack", imgPath: cert4 },
  { title: "Full stack", imgPath: cert5 },
  { title: "Algorithm", imgPath: cert6 },
  { title: "Algorithm",imgPath: cert7},
  { title: "React", imgPath: cert8 },
];
export {
  seo,
  header,
  socialMediaLinks,
  aboutPage,
  experience,
  project,
  certificates,
};
