import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Kunal",
  lastName: "Rokhle",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.png",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Kunal0304",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kunalrokhledev",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:kunaleokhle0304@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      I'm Kunal Rokhle, a full stack developer at <InlineCode>6degreesit Pvt Ltd</InlineCode>, where I specialize in building seamless and robust web and mobile applications. With expertise across the entire development lifecycle, I bring intuitive user experiences to life by combining clean code with cutting-edge technologies. Beyond my professional role, I enjoy working on personal projects that challenge my creativity and help me explore new tools and frameworks.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Experienced full stack developer with 3.5 years of expertise in web development, implementation of framework,
        designing and manual testing. Proficient in collaborating with cross-functional team to gather requirement, formulate
        test plans and optimizing the project operations. Demonstrated managerial abilities in overseeing the dev team and
        ensuring 100% successfully completion of deliverables.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "6degreesit pvt ltd",
        timeframe: "2024 - Present",
        role: "Senior MernStack Developer",
        achievements: [
          <>
            Created and maintained user-friendly frontend for an online pharmacy platform, including API integration
            for seamless experience.
          </>,
          <>
            Actively contributed as front-end developer in the ERP application, focusing on things like tax calculations
            and business documentation, ensuring efficiency and user-interface improvements.
          </>,
          <>
            Contributed to the development and revision of the UI/UX design incorporating use cases and industry
            best practices to improve the overall user experience.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-02/cover-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "Nstack Softech",
        timeframe: "2022 - 2024",
        role: "Software Engineer ",
        achievements: [
          <>
            Contributed to the development of PSM, a comprehensive service management platform facilitating
            employee record management, target tracking, order monitoring, and Google tracking data analysis
          </>,
          <>
            Developed and integrated APIs for PSM service management project, facilitating efficient management of
            employee records, target tracking, and order monitoring using React.js and Node.js
          </>,
          <>
            Created rewards point system using SCSS, ReactJS, Redux, JavaScript, and REST APIs. The system allows
            merchants to list products and customers to earn rewards.
          </>
        ],
        images: [],
      },
      {
        company: "Apoliums Infotech",
        timeframe: "2021 - 2022",
        role: "React Developer",
        achievements: [
          <>
            Successfully developed and implemented frontend components for a restaurant and cafe reservation
            system, ensuring seamless adaptability to various operational requirements.
          </>,
          <>
            Created a user-friendly interface and enhanced functionality of reservation system using CSS, JSX,
            JavaScript, ReactJS, AntDesign, and Redux.
          </>,
          <>
            Enhanced user experience through visually appealing interfaces designed with SCSS and Styled
            Components.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-05/cover-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "DAVV University of Indore",
        description: <>Graduated with a Bachelor's degree in Computer Application.</>,
      },
      {
        name: "High School",
        description: <>Completed my high school with 8 cgpa.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React",
        icon: "react",
        progress: 85,
      },
      {
        title: "Node JS",
        icon: "nodejs",
        progress: 75,
      },
      {
        title: "Next JS",
        icon: "next",
        progress: 70,
      },
      {
        title: "Nest Js",
        icon: "database",
        progress: 65,
      },
      {
        title: "Postgres",
        icon: "database",
        progress: 70,
      },
      {
        title: "MySQL",
        icon: "mysql_database",
        progress: 70,
      },
    ],
  },
}

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, blog, work };
