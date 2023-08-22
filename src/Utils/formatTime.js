export default function formatTime(time) {
  const type = Math.floor(time) / 12 < 1 ? "AM" : "PM";

  return `${type === "AM" ? Math.floor(time) : Math.floor(time) - 12}:${(
    (((time * 10) % 10) / 10) *
    60
  )
    .toString()
    .padStart(2, "0")} ${type}`;
}
