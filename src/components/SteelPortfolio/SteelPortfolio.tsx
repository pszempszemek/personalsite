import React from "react";
import styles from "./SteelPortfolio.module.scss";
import SteelProject from "../SteelProject/SteelProject";
import { BackArrow } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "4325",
    name: "Miscallenous Platforms",
    model: "../../assets/models/4325.ifc",
    description: "Couple of platforms with ladders & stairs",
    // img: "../../assets/images/FrontSection.png",
    img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "9109",
    name: "Chute Hoist",
    model: "../../assets/models/9109.ifc",
    description: "Chute hoist in existing building with complex connections",
    // img: "../../assets/images/FrontSection.png",
    img: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  },
  {
    id: "405500",
    name: "Test model",
    model: "../../assets/models/405500.ifc",
    description: "This is test model just to see if it is working well",
    // img: "../../assets/images/FrontSection.png",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: "4325",
    name: "Miscallenous Platforms",
    model: "../../assets/models/4325.ifc",
    description: "Couple of platforms with ladders & stairs",
    // img: "../../assets/images/FrontSection.png",
    img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "9109",
    name: "Chute Hoist",
    model: "../../assets/models/9109.ifc",
    description: "Chute hoist in existing building with complex connections",
    // img: "../../assets/images/FrontSection.png",
    img: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  },
  {
    id: "405500",
    name: "Test model",
    model: "../../assets/models/405500.ifc",
    description: "This is test model just to see if it is working well",
    // img: "../../assets/images/FrontSection.png",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: "4325",
    name: "Miscallenous Platforms",
    model: "../../assets/models/4325.ifc",
    description: "Couple of platforms with ladders & stairs",
    // img: "../../assets/images/FrontSection.png",
    img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "9109",
    name: "Chute Hoist",
    model: "../../assets/models/9109.ifc",
    description: "Chute hoist in existing building with complex connections",
    // img: "../../assets/images/FrontSection.png",
    img: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  },
  {
    id: "405500",
    name: "Test model",
    model: "../../assets/models/405500.ifc",
    description: "This is test model just to see if it is working well",
    // img: "../../assets/images/FrontSection.png",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: "4325",
    name: "Miscallenous Platforms",
    model: "../../assets/models/4325.ifc",
    description: "Couple of platforms with ladders & stairs",
    // img: "../../assets/images/FrontSection.png",
    img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "9109",
    name: "Chute Hoist",
    model: "../../assets/models/9109.ifc",
    description: "Chute hoist in existing building with complex connections",
    // img: "../../assets/images/FrontSection.png",
    img: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  },
  {
    id: "405500",
    name: "Test model",
    model: "../../assets/models/405500.ifc",
    description: "This is test model just to see if it is working well",
    // img: "../../assets/images/FrontSection.png",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: "4325",
    name: "Miscallenous Platforms",
    model: "../../assets/models/4325.ifc",
    description: "Couple of platforms with ladders & stairs",
    // img: "../../assets/images/FrontSection.png",
    img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "9109",
    name: "Chute Hoist",
    model: "../../assets/models/9109.ifc",
    description: "Chute hoist in existing building with complex connections",
    // img: "../../assets/images/FrontSection.png",
    img: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  },
  {
    id: "405500",
    name: "Test model",
    model: "../../assets/models/405500.ifc",
    description: "This is test model just to see if it is working well",
    // img: "../../assets/images/FrontSection.png",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: "4325",
    name: "Miscallenous Platforms",
    model: "../../assets/models/4325.ifc",
    description: "Couple of platforms with ladders & stairs",
    // img: "../../assets/images/FrontSection.png",
    img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "9109",
    name: "Chute Hoist",
    model: "../../assets/models/9109.ifc",
    description: "Chute hoist in existing building with complex connections",
    // img: "../../assets/images/FrontSection.png",
    img: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  },
  {
    id: "405500",
    name: "Test model",
    model: "../../assets/models/405500.ifc",
    description: "This is test model just to see if it is working well",
    // img: "../../assets/images/FrontSection.png",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
];

export const SteelPortfolio = () => {
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <div onClick={handleGoBack} className={styles.BackArrow}>
          <BackArrow />
        </div>
        <div> My Steel Detailing models:</div>
      </div>
      <div className={styles.modelsContainer}>
        {projects.map((project) => (
          <SteelProject
            key={project.id}
            name={project.name}
            model={project.model}
            img={project.img}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};
