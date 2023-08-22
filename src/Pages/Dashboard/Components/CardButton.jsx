import React from "react";

export default function CardButton({ children, className, small = true }) {
  return (
    <button
      className={`${className} ${
        small ? "text-sm" : "text-2xl"
      } font-roboto text-background from-text-light  to-text-mid rounded-full bg-gradient-to-b px-6 py-1 text-center`}
    >
      {children}
    </button>
  );
}
