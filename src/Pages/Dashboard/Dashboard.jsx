import React, { useState, useEffect } from "react";

import ActivityCardSection from "./Components/ActivityCardSection";

import todolist from "../../Utils/todolist";

export default function Dashboard() {
  const [cardSections, setCardSections] = useState({});

  useEffect((_) => {
    const d = new Date();

    const date = `${d.getMonth()}/${d.getDate()}`;
    const time = d.getHours() + d.getMinutes() / 60;
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][d.getDay()];

    const progress = todolist.filter(
      (a) =>
        a.type === "scheduled" && time > a.time.start && time <= a.time.end,
    );
    const todo = todolist.filter(
      (a) =>
        a.repeats?.includes(day) ||
        a.date === date ||
        (a.type === "assignment" && !a.date),
    );
    const upcoming = todolist.filter(
      (a) => (a.type === "test" || a.type === "project") && a.date !== date,
    );

    setCardSections({ progress: progress, todo: todo, upcoming: upcoming });
  }, []);

  return (
    <div className="flex flex-grow flex-col gap-20 p-20">
      <h1 className="font-display text-text-light text-center text-2xl font-semibold">
        Hello, <span className="text-text-mid">John</span>. Let's get some work
        done.
      </h1>
      <div className="flex gap-10">
        <div className="flex w-full flex-col gap-10">
          <ActivityCardSection
            title="In Progress"
            items={cardSections.progress || []}
          />
          <ActivityCardSection title="To-Do" items={cardSections.todo || []} />
        </div>
        <div className="flex w-full flex-col gap-10"></div>
      </div>
    </div>
  );
}
