import React from "react";
import styles from "./SteelProject.module.scss";

interface SteelProjectProps {
  id?: string;
  name: string;
  model: string;
  img: string;
  description: string;
}

const SteelProject = ({
  id,
  name,
  model,
  img,
  description,
}: SteelProjectProps) => {
  return (
    <div className={styles.steelProjectContainer}>
      <div className={styles.projectName}>{name}</div>
      <img src={img} />
    </div>
  );
};

export default SteelProject;
