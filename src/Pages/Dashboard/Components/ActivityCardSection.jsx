import React from "react";

import ActivityCard from "./ActivityCard";

export default function ActivityCardSection({ title, items }) {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <h3 className="text-text-dark font-serif text-lg">{title}</h3>
      {(items.length > 0 &&
        items.map((item, i) => {
          return <ActivityCard data={item} key={i} />;
        })) || (
        <span className="text-text-dark/50 text-sm">It's empty in here...</span>
      )}
    </div>
  );
}
