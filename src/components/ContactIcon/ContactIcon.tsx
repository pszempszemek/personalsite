import React, { ReactNode } from "react";
import styles from "./ContactIcon.module.scss";

interface ContactIconProps {
  social: {
    id: string;
    Svg: ReactNode;
    note: string;
  };
}

const ContactIcon = ({ social }: ContactIconProps) => {
  return (
    <div className={styles.contactIconContainer}>
      {social.Svg}
      {social.note}
    </div>
  );
};

export default ContactIcon;
