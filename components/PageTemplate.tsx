"use client";

import styles from "./PageTemplate.module.css";

type PageTemplateProps = {
  text: string;
  // children: React.ReactNode;
};

export const PageTemplate = ({ text }: PageTemplateProps) => {
  return (
    // <div className={styles.container}>
    <h3 className={styles.title}>{text}</h3>
    // {children}
    // </div>
  );
};
