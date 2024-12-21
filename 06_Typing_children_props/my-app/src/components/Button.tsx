import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <div className="btn">{children}</div>;
};

export default Button;
