import styles from "./HeroSection.module.scss";
import HeroBtn from "../HeroBtn/HeroBtn";
import { useLocation } from "react-router-dom";

const routes = [
  { id: "Home", url: "/" },
  { id: "About", url: "/about" },
  { id: "Portfolio", url: "/portfolio" },
  { id: "Contact", url: "/contact", hasBorder: true },
];

const Hero = () => {
  const location = useLocation();
  return (
    <div className={styles.navbarContainer}>
      {routes.map((route) => (
        <HeroBtn
          key={route.id}
          route={route}
          isHighLighted={location.pathname === route.url}
        />
      ))}
    </div>
  );
};

export default Hero;
