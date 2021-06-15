/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Usman Khabilah",
  title: "Hi all, I'm Usman",
  subTitle: emoji("A passionate Back-End Developer 🚀 having an experience of building Web with PHP / Laravel and some other cool libraries and frameworks."),
  resumeLink: "#"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Uchiman",
  linkedin: "https://www.linkedin.com/in/usman-khabilah-6097641b7/",
  gmail: "utsman.khabillah0@gmail.com",
  facebook: "https://www.facebook.com/usmankhabilah",
  instagram: "https://www.instagram.com/uchiman_dev",
  twitter: "https://www.twitter.com/uchiman_dev",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "BASIC BACK-END DEVELOPER, WHO START LEARNING TO BE FULL STACK DEVELOPER. NEVER STOP LEARNING, CAUSE NOBODY WAS BORN SMART",
  skills: [
    emoji("⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit"),
    emoji("⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit"),
    emoji("⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [{
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [{
      schoolName: "Islamic Center Daarus Sunnah",
      logo: require("./assets/images/darussunnah.png"),
      subHeader: "Wangon - Banyumas - Central Java",
      duration: "2013 - 2017",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Islamic Center Bin Baz",
      logo: require("./assets/images/binbaz.png"),
      subHeader: "Piyungan - Bantul - Special Region of Yogyakarta",
      duration: "2018 - 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    },
    {
      schoolName: "Pondok Programmer",
      logo: require("./assets/images/pondokpro.png"),
      subHeader: "Kretek - Bantul - Special Region of Yogyakarta",
      duration: "July 2020 - February 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [{
      Stack: "PHP", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Laravel",
      progressPercentage: "50%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [{
      role: "Back-End Developer",
      company: "Coming Soon",
      companylogo: require("./assets/images/cs.jpg"),
      date: "February 2021 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Back-End Developer",
      company: "Coming Soon",
      companylogo: require("./assets/images/cs.jpg"),
      date: "#### – ####",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Back-End Developer",
      company: "Coming Soon",
      companylogo: require("./assets/images/cs.jpg"),
      date: "#### – ####",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Uchiman", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [{
      image: require("./assets/images/cs.webp"),
      link: "#"
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [{
      title: "Sololearn",
      subtitle: "SoloLearn has the largest collection of free code learning content.",
      image: require("./assets/images/sololearn.webp"),
      footerLink: [{
          name: "PHP Certificate",
          url: "https://drive.google.com/file/d/1wPmFA71aynjIMOMz85fCevuiZuI0JfJO/view?usp=sharing"
        },
        {
          name: "SQL Certificate",
          url: "https://drive.google.com/file/d/1Z4lnRQKd1oX5JdYGJ0vyt5RUirF7nVI9/view?usp=sharing"
        },
      ]
    },
    {
      title: "Coming Soon",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: require("./assets/images/cs.webp"),
      footerLink: [{
        name: "Coming Soon",
        url: "#"
      }]
    },

    {
      title: "Coming Soon",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: require("./assets/images/cs.webp"),
      footerLink: [{
        name: "Coming Soon",
        url: "#"
      }]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [{
      url: "#",
      title: "Coming Soon",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      url: "#",
      title: "Coming Soon",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [{
    title: "Build Actions For Google Assistant",
    subtitle: "Codelab at GDG DevFest Karachi 2019",
    slides_url: "https://bit.ly/saadpasta-slides",
    event_url: "https://www.facebook.com/events/2339906106275053/"
  }]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62 856-9656-0548",
  email_address: "utsman.khabillah@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "uchiman_kun" //Replace "twitter" with your twitter username without @

};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
};