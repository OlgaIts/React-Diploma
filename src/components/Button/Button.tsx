import {ReactNode} from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  // type
}
export const Button = ({children, className, href, onClick}: ButtonProps) => {
  return (
    <a href={href} className={`${styles.btn} ${className}`} onClick={onClick}>
      {children}
    </a>
  );
};
