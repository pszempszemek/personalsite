import React from "react";
import styles from "./Contact.module.scss";
import { PhoneSvg, EmailSvg } from "../../assets/icons";
import ContactIcon from "../../components/ContactIcon/ContactIcon";

const options = [
  {
    id: "Phone",
    Svg: <PhoneSvg />,
    note: "+48 725 062 338",
  },
  {
    id: "Email",
    Svg: <EmailSvg />,
    note: "p.greczka96@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Me</h1>
      <p>
        I am curently open to collaboration & freelance jobs. Please feel free
        to contact using options from below:
      </p>
      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <ContactIcon key={option.id} social={option} />
        ))}
      </div>
      <p>or use socials shown at the bottom</p>
    </div>
  );
};

export default Contact;
