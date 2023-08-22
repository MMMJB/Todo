import React from "react";

import formatTime from "../../../Utils/formatTime";

export default function ActivityCard({ data, time }) {
  const capitalize = (str) =>
    str.substring(0, 1).toUpperCase() + str.substring(1);

  const backgrounds = {
    assignment: "bg-card-assignment",
    scheduled: "bg-card-scheduled",
    activity: "bg-card-activity",
    test: "bg-card-test",
    project: "bg-card-project",
  };

  const collapsed = ["scheduled", "project", "test"].includes(data.type);

  return (
    <div
      className={`${backgrounds[data.type]} ${
        data.type === "project"
          ? "text-text-project"
          : data.type === "activity"
          ? "text-text-activity"
          : "text-white"
      } ${
        data.type === "scheduled" ? "before:w-full" : "before:w-0"
      } font-roboto flex justify-between rounded-lg p-3 shadow-xl before:absolute before:bottom-0 before:left-0 before:h-11 before:rounded-lg before:bg-inherit before:opacity-60`}
      id="ACTIVITYCARD"
      style={{
        width:
          data.type !== "scheduled"
            ? "100%"
            : time
            ? `${(time / data.time.end) * 100}%`
            : "100%",
      }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-6">
          <h5 className="text-sm opacity-75">
            {data.type !== "scheduled" ? capitalize(data.type) : data.name}
          </h5>
          <h6 className="text-xs opacity-50">
            {data.time
              ? `${formatTime(data.time.start)} - ${formatTime(data.time.end)}`
              : data.length
              ? `${data.length.reduce(
                  (a, c, i) =>
                    a + c + (i !== data.length.length - 1 ? " - " : " min"),
                  "",
                )}`
              : data.date}
          </h6>
        </div>
        {data.type !== "scheduled" && <h4 className="text-lg">{data.name}</h4>}
      </div>
      {!collapsed && (
        <input
          type="checkbox"
          className="my-auto mr-3 h-6 w-6 cursor-pointer rounded-full border-2 border-current opacity-25"
        />
      )}
    </div>
  );
}
