import React from "react";

export default function ActivityCard({ data }) {
  console.log(data);

  const capitalize = (str) =>
    str.substring(0, 1).toUpperCase() + str.substring(1);

  const formatTime = (time) => {
    const type = Math.floor(time) / 12 < 1 ? "AM" : "PM";

    return `${type === "AM" ? Math.floor(time) : Math.floor(time) - 12}:${(
      (((time * 10) % 10) / 10) *
      60
    )
      .toString()
      .padStart(2, "0")} ${type}`;
  };

  const backgrounds = {
    assignment: "bg-card-assignment",
    scheduled: "bg-card-scheduled",
    activity: "bg-card-activity",
    test: "bg-card-test",
    project: "bg-card-project",
  };

  return (
    <div
      className={`${backgrounds[data.type]} ${
        data.type === "project"
          ? "text-text-project"
          : data.type === "activity"
          ? "text-text-activity"
          : "text-white"
      } font-roboto flex justify-between rounded-lg p-3`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-6">
          <h5 className="text-sm opacity-75">{capitalize(data.type)}</h5>
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
        <h4 className="text-lg">{data.name}</h4>
      </div>
      <input
        type="checkbox"
        className="my-auto mr-3 h-6 w-6 rounded-full border-2 border-current opacity-25"
      />
    </div>
  );
}
