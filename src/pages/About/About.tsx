import React from "react";
import styles from "./About.module.scss";

const jobs = [
  {
    position: "Steel detailer, Second Project Leader",
    firm: "Annex Group SP. z o.o. / Steelweb Inc.",
    duration: "07/2020 - current",
    scope: [
      "modeling of structures in BIM technology",
      "Automation of work in industry programs",
      "New employees onboarding and training",
      "Design supervision and coordination",
      "Project team menagement",
    ],
  },
  {
    position: "Designer  Assistant",
    firm: "ConStructure ",
    duration: "07/2019 - 02/2020",
    scope: [
      "Project documentation preparation",
      "Construction and executive drawigns preparation",
      "Static and strength calculation performance",
    ],
  },
  {
    position: "Designer  Assistant / Trainee",
    firm: "ALBIS",
    duration: "06/2018 - 10/2018",
    scope: [
      "Project documentation preparation",
      "Legal and official services for investments",
      "Construction and executive drawigns preparation",
    ],
  },
];

const schools = [
  {
    graduation: 2021,
    school: "Silesian Univeristy of Technology",
    degree: "Master Degree",
    course: "Civil engineering (Road Construction)",
  },
  {
    graduation: 2019,
    school: "Silesian Univeristy of Technology",
    degree: "Engineer Degree",
    course: "Civil engineering (Architecture & Construction)",
  },
  {
    graduation: 2015,
    school: "8th High School in Bielsko-Biala",
    degree: "Matriculation Certificate",
    course: "mathematical-geographical profile",
  },
];

const others = [
  { languages: [{ polish: "native" }, { english: "C1" }, { spanish: "B1" }] },
  {
    msOfficePackage: ["Excel", "Word", "PowerPoint"],
  },
  {
    civilEngineering: [
      { TeklaStructures: "advanced" },
      { AutoCAD: "advanced" },
      { ZWCad: "intermediate" },
      { AdvanceSteel: "intermediate" },
      { AutodeskRobot: "intermediate" },
      { Revit: "beginner" },
      { PeikkoDesigner: "beginner" },
    ],
  },
  { course: "2022 - Tekla API course by Construsoft led by Konrad Witczak) " },
];

const techStack = [
  { tech: "HTML" },
  { tech: "SCSS" },
  { tech: "JavaScript" },
  { tech: "TypeScript" },
  { tech: "React JS" },
  { tech: "Git" },
];

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>About</div>
      <div>
        <div className={styles.work}>work expirience</div>
        <div className={styles.education}>education</div>
        <div className={styles.techStack}>tech stack</div>
        <div className={styles.others}>others</div>
      </div>
    </div>
  );
};

export default About;
