import React, { useState, useEffect } from "react";

import ActivityCardSection from "./Components/ActivityCardSection";
import Card from "./Components/Card";
import CardButton from "./Components/CardButton";

import todolist from "../../Utils/todolist";
import formatTime from "../../Utils/formatTime";

export default function Dashboard() {
  const [cardSections, setCardSections] = useState({});
  const [time, setTime] = useState();

  const getCurTime = (date) => {
    const d = date || new Date();
    return parseFloat((d.getHours() + d.getMinutes() / 60).toFixed(2));
  };

  useEffect((_) => {
    const d = new Date();

    const date = `${d.getMonth()}/${d.getDate()}`;
    const time = getCurTime();
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

  useEffect((_) => {
    const timeLoop = setInterval((_) => {
      setTime(getCurTime());
    }, 1000);

    return (_) => clearInterval(timeLoop);
  }, []);

  return (
    <div className="flex flex-grow flex-col gap-20 p-20">
      <h1 className="font-display text-text-light text-center text-2xl font-semibold">
        Hello, <span className="text-text-mid">John</span>. Let's get some work
        done.
      </h1>
      <div className="flex justify-center gap-10">
        <div className="flex w-full max-w-xl flex-col gap-10">
          <ActivityCardSection
            title="In Progress"
            items={cardSections.progress || []}
            time={time}
          />
          <ActivityCardSection title="To-Do" items={cardSections.todo || []} />
        </div>
        <div className="flex w-full max-w-xl flex-col gap-5">
          <CardButton small={false}>+</CardButton>
          <div className="flex gap-5">
            <Card title="Daily Goal">
              <h2 className="text-text-light font-serif text-base">
                Clean out my email inbox.
              </h2>
              <CardButton>Complete</CardButton>
            </Card>
            {cardSections.progress?.map((e) => {
              return (
                <Card title={e.name} key={e.name}>
                  {time && (
                    <>
                      <h2 className="text-text-light font-mono text-5xl">
                        {formatTime(e.time.end - time, true, true)}
                      </h2>
                      <span className="text-text-mid font-serif text-sm">
                        {Math.floor((time / e.time.end) * 100)}% Complete
                      </span>
                    </>
                  )}
                </Card>
              );
            })}
          </div>
          <ActivityCardSection
            className="mt-5"
            title="Upcoming"
            items={cardSections.upcoming || []}
          />
        </div>
      </div>
    </div>
  );
}
