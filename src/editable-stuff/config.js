// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Naresh",
  middleName: "",
  lastName: "Agrawal",
  message: "An Engineer by profession, a problem-solver by passion",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nareshagrawal",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/soom.agrawal",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/naresh_agrawal316/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/naresh-agrawal/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/nareshagrawal.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/nareshagrawal.png"),
  imageSize: "100%",
  message:
    "An Engineer by profession, a problem-solver by passion. I possess a strong technical background and a “Roll up your sleeves” attitude, going above and beyond the team to accomplish objectives and key results. I am a team player, a keen learner, and believe in consistency by nature. Problems that are challenging and that have a large-scale impact, excite me most.\n Currently, a full-time graduate student pursuing a Master's in Information Systems at Northeastern University, Boston. An ambitious and analytical individual, utilizing exceptional skills and competence in understanding client business requirements and delivering the best possible solution.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "nareshagrawal",
  reposLength: 20,
  specificRepos: [],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "AWS, Azure", value: 95 },
    { name: "Kubernetes, Kops, Helm Chart", value: 95 },
    { name: "IaC(Ansible, Terraform, Packer)", value: 95 },
    { name: "CI/CD(Jenkins, CircleCI, GitHub Actions)", value: 95 },
    { name: "Microservices, RESTful APIs", value: 95 },
    { name: "Docker, Git", value: 95 },
    { name: "Apache Kafka, Apache JMeter", value: 95 },
    { name: "DevOps Tools", value: 95 },
    { name: "Scripting", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Java, Spring Boot, Spring MVC, Hibernate", value: 90 },
    { name: "JavaScript, React", value: 80 },
    { name: "HTML/CSS, SCSS, Bootstrap ", value: 90 },
    { name: "SQL, NoSQL", value: 90 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 95 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Site Reliability Engineering, DevOps Engineer or Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nareshagrawal316@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Site Reliability Engineering Co-op',// Here Add Company Name
      companylogo: require('../assets/img/intralinks.png'),
      date: 'June 2020 – Jan 2021',
      content: ["• Created a ‘Status Page’, automated and integrated it with the monitoring tool (SaaS) informing the customer about downtime, incident, maintenance of the products and services, easily communicate real-time status to end-user\n",
                "• Set up monitoring, alerts, handled overloads on the server and automated tasks via CI/CD pipeline\n",
                "• Deployed code update, worked to roll environment forward and performed release engineering\n",
                "• Troubleshoot and escalate bugs for Live server product, examining, investigating, and resolving problems to help smooth product performance and tracking progress through JIRA, ServiceNow, and Git Repositories\n",
                "• Created and maintained documentation of systems and processes for existing and new systems on Confluence\n",]
    },
  ]
}

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
