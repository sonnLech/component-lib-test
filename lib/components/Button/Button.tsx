import React from "react";
import "./Button.scss";
// import styles from './Button.module.css';

type PropTypes = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "error" | "outline";
};

export const Button: React.FC<PropTypes> = ({
  children,
  variant = "regular",
}) => {
  return <button className={`btn btn-${variant}`}>{children}</button>;
};
