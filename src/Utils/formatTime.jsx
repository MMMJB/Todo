export default function formatTime(time, notype = false, component = false) {
  const type = notype ? null : Math.floor(time) / 12 < 1 ? "AM" : "PM";

  const hours = type === "PM" ? Math.floor(time) - 12 : Math.floor(time);
  const minutes =
    Math.floor((((time * 10) % 10) / 10) * 60)
      .toString()
      .padStart(2, "0") + (type ? ` ${type}` : "");

  return !component ? (
    `${hours}:${minutes}`
  ) : (
    <span>
      {hours}
      <span className="animate-tick">:</span>
      {minutes}
    </span>
  );
}
