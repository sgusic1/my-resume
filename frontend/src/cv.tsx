import iconTS from "@/assets/icons/typescript.svg";
import iconJS from "@/assets/icons/javascript.svg";
import iconPython from "@/assets/icons/python.svg";
import iconC from "@/assets/icons/c.svg";
import iconCpp from "@/assets/icons/cpp.svg";
import iconQt from "@/assets/icons/qt.svg";
import iconBashDark from "@/assets/icons/bash-dark.svg";
import iconBashLight from "@/assets/icons/bash-light.svg";
import iconRedis from "@/assets/icons/redis.svg";
import iconRabbitMQ from "@/assets/icons/rabbitmq.svg";
import iconKafkaDark from "@/assets/icons/kafka-dark.svg";
import iconKafkaLight from "@/assets/icons/kafka-light.svg";
import iconReact from "@/assets/icons/react.svg";
import iconAngular from "@/assets/icons/angular.svg";
import iconPostgres from "@/assets/icons/postgres.svg";
import iconGolang from "@/assets/icons/golang.svg";
import iconNestJS from "@/assets/icons/nestjs.svg";
import iconVue from "@/assets/icons/vue.svg";
import iconDjango from "@/assets/icons/django.svg";
import iconDocker from "@/assets/icons/docker-logo.svg";
import iconLinux from "@/assets/icons/linux.svg";
import iconGit from "@/assets/icons/git-with-text.svg";
import iconJetBrains from "@/assets/icons/jetbrains.svg";
import iconEmacs from "@/assets/icons/emacs.svg";
import iconNginx from "@/assets/icons/nginx.svg";
import iconNodejs from "@/assets/icons/nodejs.svg";
import iconEthereum from "@/assets/icons/ethereum.svg";
import iconSolana from "@/assets/icons/solana.svg";
import iconJava from "@/assets/icons/java.svg";
import iconCSharp from "@/assets/icons/csharp.svg";
import iconHTML from "@/assets/icons/html.png";
import iconCSS from "@/assets/icons/css.png";
import type { JSX } from "vue/jsx-runtime";

import type { Skill, SkillGroup } from "@/types";

const _skillGroups = {
  programmingLanguages: {
    key: "programmingLanguages",
    name: "Programming Languages",
  },
  technologies: {
    key: "technologies",
    name: "Technologies",
  },
  otherTools: {
    key: "otherTools",
    name: "Other Tools",
  },
  /*others: {
    key: "others",
    name: "Others",
  },*/
  stale: {
    key: "stale",
    name: "Stale",
    disabled: true,
  },
} as const satisfies Record<string, SkillGroup>;

export const skillGroups = _skillGroups as Record<
  keyof typeof _skillGroups,
  SkillGroup
>;

const _skills = {
  angular: {
    name: "Angular",
    icon: iconAngular,
    group: skillGroups.technologies,
    experience: "1 year",
    disabled: true,
  },
  nestjs: {
    name: "NestJS",
    icon: iconNestJS,
    group: skillGroups.technologies,
    experience: "1 year",
    disabled: true,
  },
  postgres: {
    name: "PostgreSQL",
    icon: iconPostgres,
    group: skillGroups.technologies,
    experience: "1 year",
    disabled: true,
  },
  redis: {
    name: "Redis",
    icon: iconRedis,
    group: skillGroups.technologies,
    experience: "1 year",
    disabled: true,
  },
  rabbitmq: {
    name: "RabbitMQ",
    icon: iconRabbitMQ,
    group: skillGroups.technologies,
  },
  kafka: {
    name: "Kafka",
    icon: {
      dark: iconKafkaDark,
      light: iconKafkaLight,
    },
    group: skillGroups.technologies,
  },
  golang: {
    name: "Go",
    icon: iconGolang,
    group: skillGroups.programmingLanguages,
    experience: "6 months",
    disabled: true,
  },
  vue: {
    name: "Vue.js",
    icon: iconVue,
    group: skillGroups.technologies,
    experience: "6 months",
    disabled: true,
  },
  django: {
    name: "Django",
    icon: iconDjango,
    group: skillGroups.technologies,
    experience: "1 year",
  },
  c: {
    name: "C",
    icon: iconC,
    group: skillGroups.programmingLanguages,
    experience: "Basic",
  },
  cpp: {
    name: "C++",
    icon: iconCpp,
    group: skillGroups.programmingLanguages,
    experience: "Basic",
  },
  csharp: {
    name: "C#",
    icon: iconCSharp,
    experience: "2 months",
    group: skillGroups.programmingLanguages,
  },
  html: {
    name: "HTML",
    icon: iconHTML,
    experience: "1 year",
    group: skillGroups.programmingLanguages,
  },
  css: {
    name: "CSS",
    icon: iconCSS,
    experience: "1 year",
    group: skillGroups.programmingLanguages,
  },
  javascript: {
    name: "JavaScript",
    icon: iconJS,
    group: skillGroups.programmingLanguages,
    experience: "1 year",
  },
  python: {
    name: "Python",
    icon: iconPython,
    group: skillGroups.programmingLanguages,
    experience: "1 year",
  },
  typescript: {
    name: "TypeScript",
    icon: iconTS,
    group: skillGroups.programmingLanguages,
    experience: "3 months",
  },
  nodejs: {
    name: "Node.js",
    icon: iconNodejs,
    group: skillGroups.technologies,
    experience: "1 year",
  },
  bash: {
    name: "Bash",
    icon: {
      dark: iconBashDark,
      light: iconBashLight,
    },
    group: skillGroups.programmingLanguages,
    experience: "Basic",
  },
  nginx: {
    name: "Nginx",
    icon: iconNginx,
    group: skillGroups.technologies,
    experience: "6 months",
    disabled: true,
  },
  react: {
    name: "React",
    icon: iconReact,
    group: skillGroups.technologies,
    experience: "3 months",
  },
  qt: {
    name: "Qt",
    icon: iconQt,
    group: skillGroups.technologies,
    experience: "1 year",
    disabled: true,
  },
  docker: {
    name: "Docker",
    icon: iconDocker,
    group: skillGroups.otherTools,
    experience: "Basic",
  },
  git: {
    name: "Git",
    icon: iconGit,
    group: skillGroups.otherTools,
    experience: "1 year",
  },
  jetbrains: {
    name: "JetBrains",
    icon: iconJetBrains,
    group: skillGroups.otherTools,
    experience: "1 year",
    disabled: true,
  },
  linux: {
    name: "Linux",
    icon: iconLinux,
    group: skillGroups.otherTools,
    experience: "1 year",
  },
  emacs: {
    name: "Emacs",
    icon: iconEmacs,
    group: skillGroups.otherTools,
    experience: "3 years",
    disabled: true,
  } /*
  restApi: {
    name: "REST API",
    group: skillGroups.others,
    experience: "3 years",
  },
  microservices: {
    name: "Microservices",
    group: skillGroups.others,
    experience: "2 years",
  },
  saas: {
    name: "SaaS",
    group: skillGroups.others,
    experience: "1 year",
  },
  agile: {
    name: "Agile",
    group: skillGroups.others,
    experience: "3 years",
  },
  iot: {
    name: "IoT",
    group: skillGroups.others,
    experience: "1 year",
  },
  plc: {
    name: "PLC programming",
    group: skillGroups.others,
    experience: "6 months",
    disabled: true,
  },
  tiaPortal: {
    name: "TIA Portal",
    group: skillGroups.others,
    disabled: true,
  },
  soMachine: {
    name: "SoMachine",
    group: skillGroups.others,
    disabled: true,
  },
  abbVFD: {
    name: "ABB VFDs (basic)",
    group: skillGroups.others,
    disabled: true,
  },*/,
  java: {
    name: "Java",
    icon: iconJava,
    experience: "1 year",
    group: skillGroups.programmingLanguages,
    disabled: true,
  },
  /*
  teaching: {
    name: "Teaching",
    group: skillGroups.others,
    disabled: true,
  },
  technicalWriting: {
    name: "Technical writing",
    group: skillGroups.others,
    disabled: true,
  },*/
  ethereum: {
    name: "Ethereum",
    icon: iconEthereum,
    group: skillGroups.technologies,
    experience: "6 months",
    disabled: true,
  },
  solana: {
    name: "Solana",
    icon: iconSolana,
    group: skillGroups.technologies,
    disabled: true,
  },
} as const satisfies Record<string, Skill>;

export const skills = _skills as Record<keyof typeof _skills, Skill>;

export interface Group {
  key: string;
  name: string;
  disabled?: boolean;
}

export interface Entry {
  key?: string;
  node: () => JSX.Element;
  startDate: string;
  endDate?: string;
  displayDate?: string;
  skills: Array<Skill | string>;
  labels?: string[];
  group?: Group;
  disabled?: boolean;
  accomplishments?: string[];
}

const _groups = {
  education: {
    name: "Education",
    key: "education",
  },
  /*professionalExperience: {
    name: "Professional Experience",
    key: "professionalExperience",
  },*/
  otherExperience: {
    name: "Other experience",
    key: "otherExperience",
  },
  /*extraCurricular: {
    name: "Extra-curricular",
    key: "extraCurricular",
    disabled: true,
  },*/
} as const satisfies Record<string, Group>;

export const groups = _groups as Record<keyof typeof _groups, Group>;

const _entries = {
  enocean: {
    node: () => (
      <span>
        <a href="https://www.linkedin.com/company/enocean/" target="_blank">
          <b>EnOcean</b>
        </a>
        , Full-Stack Software Engineer, Full-Time
      </span>
    ),
    startDate: "2023-01",
    displayDate: "Jan 2023 - present",
    skills: [
      _skills.typescript,
      _skills.python,
      _skills.javascript,
      _skills.java,
      // _skills.angular,
      _skills.docker,
      //  _skills.golang,
      _skills.git,
      _skills.jetbrains,
      _skills.linux,
      // _skills.nestjs,
      //  _skills.postgres,
      //  _skills.redis,
      /* _skills.restApi,
      _skills.saas,
      _skills.iot,*/
    ],
    labels: [
      "SaaS",
      "IoT",
      "Frontend",
      "Backend",
      "System Architecture",
      "Microservices",
      "Event-driven",
      "REST API",
      "Protobuf",
    ],
    group: groups.professionalExperience,
    accomplishments: [
      "Participated in architectural decisions and led feasibility investigations",
      "Delivered migration from old Karaf codebase to Spring Boot",
      "Significantly improved reliability, maintainability, CI/CD and observability",
      "Consistently delivered features in greenfield and brownfield projects",
    ],
  },
  evoltSoftwareEngineer: {
    node: () => (
      <span>
        <a href="https://www.linkedin.com/company/evolt-dev/" target="_blank">
          <b>Evolt</b>
        </a>
        , Full-Stack Software Engineer, Full-Time
      </span>
    ),
    startDate: "2022-01",
    endDate: "2022-12",
    displayDate: "Jan - Dec 2022",
    skills: [
      _skills.javascript,
      _skills.typescript,
      _skills.react,
      _skills.git,
      _skills.docker,
      _skills.ethereum,
      _skills.docker,
      _skills.jetbrains,
      _skills.docker,
      _skills.nodejs,
      /* _skills.restApi,
      _skills.microservices,*/
    ],
    labels: ["Backend", "Frontend", "Blockchain"],
    //group: groups.professionalExperience,
  },
  evoltInternship: {
    node: () => (
      <span>
        <a href="https://www.linkedin.com/company/evolt-dev/" target="_blank">
          <b>Evolt</b>
        </a>
        , one month internship
      </span>
    ),
    startDate: "2025",
    displayDate: "Dec 2021",
    skills: [skills.python, skills.django, skills.docker, skills.jetbrains],
    labels: ["Backend"],
    //group: groups.professionalExperience,
  },
  local_library_website: {
    node: () => (
      <span>
        <a href="https://github.com/veracioux/website" target="_blank">
          Local Library Website
        </a>
      </span>
    ),
    startDate: "2025",
    endDate: "present",
    skills: [
      skills.python,
      skills.django,
      skills.typescript,
      skills.javascript,
      skills.docker,
      //skills.vue,
      skills.nginx,
      skills.linux,
      skills.bash,
    ],
    labels: [
      "Python",
      "Django",
      "React",
      "TypeScript",
      "PostgreSQL",
      "HTML",
      "CSS",
    ],
    description: `Developed a full library management site using Django REST Framework with a React + Vite + TypeScript frontend and PostgreSQL 
      for data storage. Implemented user authentication, role-based permissions and complete form validation. Built CRUD interfaces for books 
      and authors, with the React client communicating through REST APIs from the Django backend.`,
    group: groups.otherExperience,
  },
  cafe_finder: {
    node: () => (
      <span>
        <a href="https://opencode.ai" target="_blank">
          <b>Espresso</b>
        </a>
      </span>
    ),
    startDate: "2025-10",
    displayDate: "Oct 2025 - present",
    description: `Built a café finder app with React, Vite and TypeScript. Used the Geolocation and Google Places APIs to show nearby cafés. 
      Added favorites with localStorage caching, an Express proxy for API requests, and styled the UI with Tailwind CSS.`,
    skills: [skills.typescript, skills.git],
    labels: [
      "React",
      "TypeScript",
      "Geolocation API",
      "Google Places API",
      "Tailwind CSS",
    ],
    group: groups.otherExperience,
  },
  basic_library_website: {
    node: () => (
      <span>
        <a href="https://flameshot.org" target="_blank">
          <b>Basic Library Website</b>
        </a>
      </span>
    ),
    startDate: "2025",
    endDate: "present",
    skills: [skills.cpp, skills.qt, skills.git],
    description: `Developed a basic library website using Express.js, MongoDB and Pug, providing 
      CRUD tools for managing books and authors alongside a user system with login and logout.`,
    labels: ["Node.js", "Express", "MongoDB", "HTML", "JavaScript", "CSS"],
    group: groups.otherExperience,
    accomplishments: [
      "Led major refactors, solving long-standing bugs and pain points",
      "Improved performance significantly",
      "Led discussions on project direction",
      "Reviewed and merged various community contributions",
    ],
  },
  bachelor: {
    node: () => (
      <span>
        <b>Bachelor of Electrical Engineering</b>, <br />
        Department of Power Engineering, <br />
        Faculty of Electrical Engineering, University&nbsp;of&nbsp;Sarajevo
        <br />
      </span>
    ),
    startDate: "2020",
    endDate: "2024",
    group: groups.education,
    labels: [
      "C",
      "C++",
      "C#",
      "Programming techniques",
      "Object-oriented Analysis and Design",
    ],
    //skills: [skills.plc, skills.soMachine, skills.cpp],
  },
  rotatingLedDisplay: {
    node: () => (
      <span>
        <a
          href="https://github.com/veracioux/rotating-led-display"
          target="_blank"
        >
          <b>Rotating LED Display</b>
        </a>
        , High School Project Festival, Hadžići,
        Bosnia&nbsp;and&nbsp;Herzegovina
        <br />
      </span>
    ),
    startDate: "2017",
    displayDate: "Spring 2017",
    skills: [skills.cpp],
    labels: ["Lead Engineer", "Lead Designer", "Lead Programmer"],
    group: groups.otherExperience,
  },
  moviestreaming: {
    node: () => (
      <span>
        <a href="https://github.com/veracioux/wood-fall" target="_blank">
          <b>Movie Streaming Website</b>
        </a>
      </span>
    ),
    startDate: "2021",
    endDate: "2022",
    // skills: ["C#", "Unity"],
    labels: ["C#", ".NET", "TMDB API", "OOP", "MVC"],
    description: `Collaborated in a team of 3 to design and build a full-stack movie-streaming website, using C# and ASP.NET. Implemented role-based 
    permissions (user, editor, admin), movie management tools and automated metadata retrieval via the TMDB API.`,
    group: groups.otherExperience,
  },
  renovation: {
    node: () => (
      <span>
        <b>Renovation of sports grounds</b>, Kamberovića polje Zenica
      </span>
    ),
    startDate: "2016-03",
    endDate: "2016-11",
    displayDate: "Mar - Nov 2016",
    labels: ["Participant", "Youth Leadership Program 2016"],
    //group: groups.extraCurricular,
  },
  demosPMS: {
    node: () => (
      <span>
        <b>Undergraduate Teaching Assistant</b>,
        University&nbsp;of&nbsp;Sarajevo, Course:&nbsp;
        <i>Design&nbsp;of&nbsp;Microprocessor&nbsp;Systems</i>
      </span>
    ),
    startDate: "2021-03",
    endDate: "2021-06",
    displayDate: "Mar - Jun 2021",
    // skills: [skills.plc, skills.soMachine, skills.teaching],
    labels: ["PLC programming", "SoMachine"],
    //group: groups.professionalExperience,
  },
  elektromatik: {
    node: () => <span>Internship, Elektromatik d.o.o. Zenica</span>,
    startDate: "2019",
    endDate: "2020",
    displayDate: "Summer 2019, Summer 2020",
    //skills: [skills.plc, skills.tiaPortal, skills.abbVFD],
    labels: [
      "PLC programming",
      "Industrial sensors",
      "Industrial schematic design",
    ],
    //group: groups.professionalExperience,
  },
  demosTP: {
    node: () => (
      <span>
        <b>Undergraduate Teaching Assistant</b>,
        University&nbsp;of&nbsp;Sarajevo, Course:&nbsp;
        <i>Programming&nbsp;Techniques</i>
      </span>
    ),
    startDate: "2019-03",
    endDate: "2019-06",
    displayDate: "Mar - Jun 2019",
    // skills: [skills.cpp, skills.teaching],
    labels: ["C++"],
    //group: groups.professionalExperience,
  },
  stackExchange: {
    node: () => (
      <span>
        <b>Answering community questions</b>,{" "}
        <a href="https://math.stackexchange.com/users/450231" target="_blank">
          Mathematics StackExchange
        </a>
      </span>
    ),
    startDate: "2018",
    endDate: "present",
    //skills: [skills.teaching],
    //group: groups.extraCurricular,
  },
  githubProjects: {
    node: () => (
      <span>
        <b>
          Various personal projects on{" "}
          <a href="https://github.com/veracioux" target="_blank">
            GitHub
          </a>
        </b>
      </span>
    ),
    startDate: "2018",
    endDate: "present",
    skills: [
      skills.jetbrains,
      skills.git,
      skills.nginx,
      skills.c,
      skills.cpp,
      skills.docker,
      skills.typescript,
      skills.javascript,
      skills.django,
      skills.qt,
      skills.bash,
      //skills.technicalWriting,
      skills.emacs,
    ],
    group: groups.otherExperience,
  },
} satisfies Record<string, Entry>;

export const entries = Object.fromEntries(
  Object.entries(_entries).map(([key, entry]) => [key, { ...entry, key }])
) as Record<keyof typeof _entries, Entry>;

Object.entries(skills).forEach(([key, skill]) => (skill.key = key));
Object.entries(skillGroups).forEach(
  ([key, skillGroup]) => (skillGroup.key = key)
);
Object.entries(entries).forEach(([key, entry]) => (entry.key = key));
Object.entries(groups).forEach(([key, group]) => {
  group.key = key;
});

export type DisplayMode = "timeline" | "byCategory";
