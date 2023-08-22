export default function formatTime(time, notype = false) {
  const type = notype ? null : Math.floor(time) / 12 < 1 ? "AM" : "PM";

  return `${
    type === "PM" ? Math.floor(time) - 12 : Math.floor(time)
  }:${Math.floor((((time * 10) % 10) / 10) * 60)
    .toString()
    .padStart(2, "0")}${type ? ` ${type}` : ""}`;
}
