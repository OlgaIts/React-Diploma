import {ReactNode, memo} from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  children: ReactNode;
  className?: string;
  tag?: "h2" | "h5";
  isCentered?: boolean;
}

export const Title = memo(
  ({children, className, tag, isCentered}: TitleProps) => {
    const H = tag === "h5" ? "h5" : "h2";
    const centeredStyle = isCentered ? styles.center : "";

    return (
      <H
        className={`${
          tag === "h5" ? styles.h5 : styles.h2
        } ${className} ${centeredStyle}`}
      >
        {children}
      </H>
    );
  },
);

Title.displayName = "Title";
