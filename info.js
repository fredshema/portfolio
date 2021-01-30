let info = {
  name: "Shema Fred",
  logo_name: "Shema",
  flat_picture: require("./src/assets/portrait.png"),
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
    "I am a second year Infomation Technology graduate student at Adventist University of Central Africa (AUCA) with an interest in Software Development and UI Design  - and seeking exciting opportunities related to the same.<br><br>I am a quality oriented person and I keep my goals and tasks organized to maintain productivity. I would bring to table a wide range of software skills, ranging from design and development to writing scripts.",
  links: {
    linkedin: "https://www.linkedin.com/in/shema-fred-37bb051a2/",
    github: "https://github.com/shema-fred",
    twitter: "https://twitter.com/shxmv_",
    resume: "https://drive.google.com/file/d/1GPiv2uJ3KKv8qjrfJzbOG6G7PREv47tR/view?usp=sharing",
  },
  education: [
    {
      name: "Adventist University of Central Africa ",
      place: "Rwanda, Kigali",
      date: "March, 2019 - current",
      degree: "Bachelors degree in Information Technology",
      gpa: "-",
      description:
        "Currently pursuing my Bachelors degree in Information Technology department of software engineering.",
      skills: ["Software Engineering", "Algorithms"],
    },
    {
      name: "Nyamata TSS",
      place: "Rwanda, Bugesera",
      date: "Jan, 2016 - Dec, 2018",
      degree: "Secondary school diploma",
      gpa: "37/60",
      description:
        "Finished my high school at Nyamata TSS with a diploma in Computer Electronics.",
      skills: [
        "Computer basics",
        "Electricity & Electronics",
        "Arduino basics",
      ],
    },
  ],
  experience: [
    {
      name: "Front-end Developer at Quarks Group",
      place: "Rwanda, Kigali",
      date: "Jun, 2020 - Present",
      position: "Front-end Developer",
      description:
        "Working as a frontend developer, mainly dealing with ui designs and implementations. currently using the vueJs library",
      skills: [
        "Javascript",
        "VueJs",
        "visual Studio",
        "CSS & Sass",
        "Shell",
        "CI/CD",
      ],
    },
  ],
  skills: [
    {
      title: "languages",
      info: ["Javascript"],
      icon: "fa fa-code",
    },
    {
      title: "web technologies",
      info: ["Vue", "React", "HTML", "CSS"],
      icon: "fas fa-laptop-code",
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "Postgress"],
      icon: "fa fa-database",
    },
    {
      title: "operating systems & tools",
      info: ["Ubuntu", "Windows", "Android", "Heroku", "Netlify"],
      icon: "fas fa-tools",
    },
    {
      title: "design",
      info: ["XD", "Photoshop", "Figma"],
      icon: "fa fa-pencil-square-o",
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
