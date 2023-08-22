import React from "react";

export default function CardButton({ children, className }) {
  return (
    <button
      className={`${className} font-roboto text-background from-text-light to-text-mid rounded-full bg-gradient-to-b px-6 py-1 text-center text-sm`}
    >
      {children}
    </button>
  );
}
