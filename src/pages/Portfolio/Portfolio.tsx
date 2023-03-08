import React from "react";
import styles from "./Portfolio.module.scss";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection";
import FrontSectionImg from "../../assets/images/FrontSection.png";
import SteelSectionImg from "../../assets/images/SteelSection.png";

const sections = [
  {
    id: "Front-end",
    url: "/portfolio/front",
    img: FrontSectionImg,
  },
  {
    id: "Steel Detailing",
    url: "/portfolio/steel",
    img: SteelSectionImg,
  },
];

const Portfolio = () => {
  return (
    <div className={styles.container}>
      {sections.map((section) => (
        <PortfolioSection id={section.id} url={section.url} img={section.img} />
      ))}
    </div>
  );
};

export default Portfolio;
