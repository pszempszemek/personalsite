import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./HeroBtn.module.scss";
import cn from "classnames";

interface HeroBtnProps {
  route: {
    id: string;
    hasBorder?: boolean;
    url: string;
  };
  isHighLighted?: boolean;
}

const HeroBtn = ({ route, isHighLighted }: HeroBtnProps) => {
  return (
    <div
      id={route.id}
      className={cn([
        styles.btn,
        {
          [styles.contact]: route.hasBorder,
          [styles.highLighted]: isHighLighted,
        },
      ])}
      // className={cn([
      //   styles.btn,
      //   route.hasBorder && styles.contact,
      //   isHighLighted && styles.btn_highLighted,
      // ])}
    >
      <Link to={route.url} state={route.id}>
        {route.id}
      </Link>
    </div>
  );
};

export default HeroBtn;
