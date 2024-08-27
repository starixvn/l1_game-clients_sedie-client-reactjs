import React, { ReactNode } from "react";
import styles from "./game-container.module.scss";

const GameContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <div className={styles["game-container"]}>{children}</div>;
};

export default GameContainer;
