import lyntics from "./resources/images/avatar/Lyntics.jpg";
import fortinet from "./resources/images/avatar/Fortinet.jpg";
import myLogo from "./resources/images/me/myLogo.svg";

import leetcodeIcon from "./resources/images/media/leetcode-icon.jpg";

import cert1 from "./resources/images/certificate/javascript_weired_part.jpg";
import cert2 from "./resources/images/certificate/modern_react.jpg";
import cert3 from "./resources/images/certificate/mysql_bootcamp.jpg";
import cert4 from "./resources/images/certificate/web_dev.jpg";
import cert5 from "./resources/images/certificate/web_dev_bootcamp.jpg";
import cert6 from "./resources/images/certificate/data_structure_and_algorithm.jpg";
import cert7 from "./resources/images/certificate/javascript_algorithms_and data_structures.jpg";
import cert8 from "./resources/images/certificate/complete_react.jpg";
import cert9 from "./resources/images/certificate/advanced_css_and_sass.jpg";
import cert10 from "./resources/images/certificate/typescript.jpg";
import cert11 from "./resources/images/certificate/Testing_React_with_Jest_and_React_Testing_Library_RTL.jpg";

import project1 from "./resources/images/project/onlineCourse.jpg";
import project2 from "./resources/images/project/videos.jpg";
import project3 from "./resources/images/project/yelpCamp.jpg";

import portrait from "./resources/images/me/me.jpg";

const seo = {
  title: "Patrick's Portfolio",
  description: "Hi I am Partick, a frontend developer.",
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
    icon: <i className="fab fa-github media-link" alt="Github-icon"></i>,
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/patrickwctsai",
    icon: (
      <i
        className="fab fa-linkedin media-link"
        alt="LinkedIn-icon"
        style={{ color: "#0a66c2" }}
      ></i>
    ),
    fontAwesomeIcon: "fab fa-linkedin",
    backgroundColor: "#0a66c2",
  },
  {
    name: "leetcode",
    link: "https://leetcode.com/DeltaLF/",
    icon: <img src={leetcodeIcon} className="media-link" alt="leetcode-icon" />,
  },
];

const intro = {
  greet: ["Hi, I'm Patrick Tsai", "A React Frontend Developer!"],
  aboutMe: [
    "I am a continuously learning frontend developer who previously worked as an anti-virus analyst. Through self-taught experiences in the past, I have discovered that learning brings me achievements, confidence, and opens up new possibilities. I enjoy immersing myself in coding, often losing track of time. I am passionate about discussing and sharing knowledge with others. Solving programming problems is a source of satisfaction for me. I believe that combining my passion and work leads to personal growth and improvement.",
  ],
  portaitPath: portrait,
  softwareSkills: [
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "simple-icons:typescript",
      style: {
        backgroundColor: "#ffffff",
        color: "#2f74c0",
      },
    },
    {
      skillName: "React",
      fontAwesomeClassname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "Redux",
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "simple-icons:html5",
      style: {
        color: "#E34F26",
      },
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fa-css3",
      style: {
        color: "#1572B6",
      },
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "ion-logo-python",
      style: {
        backgroundColor: "transparent",
        color: "#3776AB",
      },
    },
  ],
};

const experience = [
  {
    date: "2022.05 - 2022.12",
    title: "Lyntics",
    jobTitle: "Frontend developer",
    imgPath: lyntics,
    icon: "fab fa-react",
    jobDesc: (
      <ul>
        <li>Implement API with Axios and Redux Toolkit</li>
        <li>Implement permission control through HOC</li>
        <li>Using custom hooks to avoid duplicated code</li>
        <li>Optimize performance by decreasing network traffic</li>
        <li>Using Fork as git client to conduct the version control</li>
        <li>
          Increase efficiency by writing docs about frontend code structure,
          tree structure, and socket
        </li>
      </ul>
    ),
    skillList: [
      "React",
      "typescript",
      "redux toolkit",
      "scss",
      "antd",
      "atlaskit",
      "git fork",
    ],
  },
  {
    date: "2021.11 - current",
    title: "Self-taught",
    jobTitle: "Web developer",
    imgPath: myLogo,
    icon: "fab fa-js",
    jobDesc: (
      <ul>
        <li>300+ hours Udemy web developer classes</li>
        <li>3 deployed websites</li>
        <li>
          100+
          <a style={{ color: "#a8b090" }} href="https://leetcode.com/DeltaLF/">
            Leetcode
          </a>{" "}
          continue working on...
        </li>
      </ul>
    ),
    skillList: ["javascript", "react", "html", "css"],
  },
  {
    date: "2018.09 - 2022.04 ",
    title: "Fortient",
    jobTitle: "Anti-Virus Analyst",
    imgPath: fortinet,
    icon: "fab fa-python",
    jobDesc: (
      <ul>
        <li>Dynamic, static analyzing and unpacking 10+ families of malware</li>
        <li>Write 2000+ virus signatures to detect samples</li>
        <li>
          Build a pipeline to automatically generate dynamic analysis reports
          based on python Airflow and Cuckoo sandbox
        </li>
        <li>
          Use python sklearn to train customized classifiers to identify malware
        </li>
      </ul>
    ),
    skillList: ["python", "airflow", "sklearn", "cuckoo sandbox"],
  },
];

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
    url: "https://yelp-camp-enz8.onrender.com",
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
  { title: "Typescript", imgPath: cert10 },
  { title: "React", imgPath: cert2 },
  { title: "React", imgPath: cert8 },
  { title: "React test", imgPath: cert11 },
  { title: "MsySQL", imgPath: cert3 },
  { title: "Full stack", imgPath: cert4 },
  { title: "Full stack", imgPath: cert5 },
  { title: "Algorithm", imgPath: cert6 },
  { title: "Algorithm", imgPath: cert7 },
  { title: "CSS", imgPath: cert9 },
];
export {
  seo,
  intro,
  socialMediaLinks,
  experience,
  project,
  certificates,
  myLogo,
};
