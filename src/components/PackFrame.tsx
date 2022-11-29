import React, { Children } from "react";
import Packbutton from "./Packbutton";
import "./packframe.scss";

interface frameProps {
  text: string;
  children?: React.ReactNode;
}

const PackFrame: React.FC<frameProps> = ({ text, children }) => {
  return (
    <div className="frameline">
      <h3>{text}</h3>
      {children}
    </div>
  );
};

export default PackFrame;
