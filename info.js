let info = {
  name: "Fred Shema",
  logo_name: "Shema",
  flat_picture: require("./src/assets/portrait.png"),
  large_logo: require("./src/assets/name-logo.png"),
  config: {
    use_cookies: false,
    navbar: {
      blur: false,
    },
    mail: {
      service: "service_8ey1nq8",
      template: "template_17vnfpw",
      uid: "user_IAoHcFeuz9i0FzXYWPBVq",
    },
  },
  description:
    "I am a software engineer with expertise in Laravel, Vue.js, React.js, and Flutter, currently based in Kigali, Rwanda. With a strong background in web and mobile application development, I am dedicated to build efficient and scalable applications, tailored to meet the unique needs of clients and end-users. As a software engineer, I am a firm believer in continuous learning and staying up-to-date with the latest industry trends. I am constantly exploring new technologies and frameworks to expand my skill set and deliver cutting-edge solutions.",
  links: {
    linkedin: "https://www.linkedin.com/in/shema-fred/",
    github: "https://github.com/fredshema",
    twitter: "https://x.com/shxma_tech",
    resume:
      "https://drive.google.com/file/d/1HsydH6AYJ5VDE8SYQMmvKBCIHdjyzKVm/view?usp=sharing",
  },
  education: [
    {
      name: "Adventist University of Central Africa ",
      place: "Rwanda, Kigali",
      date: "March, 2019 - 2024",
      degree: "Bachelors degree in Information Technology",
      gpa: "-",
      description:
        "Currently pursuing my Bachelors degree in Information Technology department of software engineering.",
      skills: ["Software Engineering", "Algorithms & Data Structure"],
    },
  ],
  experience: [
    {
      name: "Quarks Group",
      place: "Rwanda, Kigali",
      date: "Jun, 2020 - Present",
      position: "Software Engineer",
      description:
        "Working as a software engineer, I am responsible for developing and maintaining software that are used by clients and end-users. I work closely with the design team to implement user interfaces that are visually appealing and user-friendly. I also collaborate with the back-end team to ensure that the front-end and back-end components of the software are seamlessly integrated.",
      skills: [
        "Golang",
        "Laravel",
        "Javascript & Typescript",
        "Flutter",
        "CI/CD",
        "Ansible Automation",
        "Virtualization & Containerization",
      ],
    },
    {
      name: "Andela Technical Leadership Program",
      place: "Rwanda, Kigali",
      date: "Jan, 2024 - Nov, 2024",
      position: "Trainee",
      description:
        "The Andela Technical Leadership Program is a 10-month program that is designed to equip aspiring software engineers with the skills and knowledge required to become world-class software developers. The program covers a wide range of topics, including software development best practices, agile methodologies, and technical leadership skills.",
      skills: ["React Native", "Technical Leadership", "Communication"],
    },
  ],
  skills: [
    {
      title: "languages",
      info: ["Golang", "Laravel", "Javascript & Typescript", "React Native"],
      icon: "fa fa-code",
    },
    {
      title: "web technologies",
      info: ["Vue", "React", "SAAS", "Tailwind CSS", "Bootstrap"],
      icon: "fas fa-laptop-code",
    },
    {
      title: "databases",
      info: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Supabase", "Redis"],
      icon: "fa fa-database",
    },
  ],
  portfolio: [
    // {
    //   name: "Suicide Analyzer",
    //   pictures: [],
    //   technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
    //   category: "Website",
    //   date: "Oct, 2018 - Nov, 2018",
    //   github: "https://github.com/hrishikeshpaul/whodata",
    //   visit: "https://skylarktiral.herokuapp.com/",
    //   description:
    //     "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent.",
    // },
  ],
  portfolio_design: [
    // {
    //   name: "Pantree",
    //   title: "Pantree - Mockup Design",
    //   pictures: [
    //     {
    //       img: require("./src/assets/designs/pantree/MoodBoard.png"),
    //       title: "Moodboard",
    //     },
    //     {
    //       img: require("./src/assets/designs/pantree/1.png"),
    //       title: "Mockups 1",
    //     },
    //     {
    //       img: require("./src/assets/designs/pantree/2.png"),
    //       title: "Mockups 2",
    //     },
    //   ],
    //   technologies: ["XD", "Illustrator"],
    //   category: "Visual Design",
    //   github: "",
    //   date: "May, 2020 - July, 2020",
    //   visit: "",
    //   description:
    //     "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients.",
    // },
  ],
};

export default info;
