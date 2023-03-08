import React from "react";
import styles from "./PortfolioSection.module.scss";
import { Link } from "react-router-dom";

interface PortfolioSectionProps {
  id: string;
  url: string;
  img: string;
}

const PortfolioSection = ({ id, url, img }: PortfolioSectionProps) => {
  return (
    <div id={id} className={styles.PortfolioSectionContainer}>
      <Link to={url} state={id}>
        <div className={styles.sectionName}>{id}</div>
        <img src={img} />
      </Link>
    </div>
  );
};

export default PortfolioSection;
