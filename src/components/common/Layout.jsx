import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  const childArray = React.Children.toArray(children);

  const isHeaderPresent = childArray.some(
    (child) => React.isValidElement(child) && child.type === Header
  );

  return (
    <div
      className={`w-[360px] h-screen mx-auto bg-white ${
        isHeaderPresent && "pt-[60px]"
      }`}
    >
      <div>{children}</div>
    </div>
  );
}
