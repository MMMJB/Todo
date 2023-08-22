import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="bg-card-base shadow-card flex h-full w-full flex-col gap-3 rounded-2xl p-6">
      <h3 className="text-text-mid font-serif text-sm">{title}</h3>
      <div className="mt-auto flex flex-col gap-6">{children}</div>
    </div>
  );
}
