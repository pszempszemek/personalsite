import React from "react";
import { GithubSvg, InstagramSvg, LinkedinSvg } from "../../assets/icons";
import SocialIcon from "../SocialIcon/SocialIcon";
import styles from "./Footer.module.scss";

const socials = [
  {
    id: "Github",
    Svg: <GithubSvg />,
  },
  {
    id: "Linked In",
    Svg: <LinkedinSvg />,
  },
  {
    id: "Instagram",
    Svg: <InstagramSvg />,
  },
];

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.socialWrapper}>
        {socials.map((social) => (
          <SocialIcon key={social.id} social={social} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
