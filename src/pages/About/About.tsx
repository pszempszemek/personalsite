import React, { useState } from "react";
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
    firm: "ConStructure - Construction Design Office",
    duration: "07/2019 - 02/2020",
    scope: [
      "Project documentation preparation",
      "Construction and executive drawigns preparation",
      "Static and strength calculation performance",
    ],
  },
  {
    position: "Designer  Assistant / Trainee",
    firm: "ALBIS - Construction Design Office",
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
  { name: "MS Office Package", examples: ["Excel", "Word", "PowerPoint"] },
  {
    name: "Civil Engineering Softwares",
    examples: [
      { TeklaStructures: "advanced" },
      { AutoCAD: "advanced" },
      { ZWCad: "intermediate" },
      { AdvanceSteel: "intermediate" },
      { AutodeskRobot: "intermediate" },
      { Revit: "beginner" },
      { PeikkoDesigner: "beginner" },
    ],
  },
];

const languages = [
  { language: "Polish", level: "Native" },
  { language: "English", level: "C1" },
  { language: "Spanish", level: "B1" },
];
const courses = [
  {
    name: "Tekla API",
    author: "Konrad Witczak",
    firm: "Construsoft",
    year: 2022,
  },
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
  const [expandedScope, setExpandedScope] = useState("none");

  const handleExpand = (scope: string) => {
    expandedScope != scope ? setExpandedScope(scope) : setExpandedScope("none");
  };

  return (
    <div className={styles.container}>
      <div className={styles.positionContainer}>
        <h1>Work experience:</h1>
        <p className={styles.notes}>(Cick position to show scope of work)</p>
        <ul>
          {jobs.map((job) => (
            <li key={job.firm}>
              <p
                className={styles.expandableListPosition}
                onClick={() => handleExpand(job.firm)}
              >
                <span className={styles.mediumListPosition}>
                  {`${job.duration}, `}
                </span>
                {`${job.position}`}
              </p>
              {expandedScope === job.firm &&
                job.scope.map((action) => (
                  <p
                    key={action}
                    className={styles.tinyListPosition}
                  >{` - ${action}`}</p>
                ))}
              <p className={styles.smallListPosition}>{`${job.firm}`}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.positionContainer}>
        <h1>Education:</h1>
        <ul>
          {schools.map((school) => (
            <li key={school.course}>
              <p className={styles.bigListPosition}>
                <span className={styles.mediumListPosition}>
                  {`${school.graduation}, `}
                </span>
                {`${school.school}`}
              </p>
              <p
                className={styles.smallListPosition}
              >{`${school.degree}, ${school.course}`}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.positionContainer}>
        <h1>Tech stack:</h1>
        <ul>
          {techStack.map((position) => (
            <li className={styles.mediumListPosition} key={position.tech}>
              {position.tech}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.positionContainer}>
        <h1>Languages:</h1>
        <ul>
          {languages.map((language) => (
            <li className={styles.mediumListPosition} key={language.language}>
              {language.language}: {language.level}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.positionContainer}>
        <h1>Courses:</h1>
        <ul>
          {courses.map((course) => (
            <li className={styles.mediumListPosition} key={course.name}>
              {course.name} by {course.author}, {course.firm} ({course.year})
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.positionContainer}>
        <h1>Other skills:</h1>
        <ul>
          {others.map((position) => (
            <li className={styles.mediumListPosition} key={position.name}>
              {position.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
