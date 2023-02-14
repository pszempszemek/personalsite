import React, { ReactNode } from "react";
import styles from "./SocialIcon.module.scss";

interface SocialIconProps {
  social: {
    id: string;
    Svg: ReactNode;
  };
}

const SocialIcon = ({ social }: SocialIconProps) => {
  return <div className={styles.iconContainer}>{social.Svg}</div>;
};

export default SocialIcon;
