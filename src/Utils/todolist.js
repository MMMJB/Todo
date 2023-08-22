export default [
  {
    type: "scheduled",
    repeats: ["MON", "TUE", "WED", "THU", "FRI"],
    time: {
      start: 8,
      end: 15.5,
    },
    name: "School",
  },
  {
    type: "assignment",
    length: [30, 40],
    completed: false,
    name: "Chem OneNote 5.6",
  },
  {
    type: "activity",
    length: [20, 30],
    repeats: ["MON", "WED", "FRI"],
    name: "Flute Practice",
  },
  {
    type: "scheduled",
    repeats: ["SAT", "SUN"],
    time: {
      start: 10,
      end: 14,
    },
    name: "Work",
  },
  {
    type: "project",
    date: "2/21/23",
    completed: false,
    name: "English Report",
  },
  {
    type: "scheduled",
    date: "2/22/23",
    time: {
      start: 15.5,
      end: 16,
    },
    name: "Model UN Meeting",
  },
  {
    type: "test",
    date: "2/26/23",
    name: "Chem Bond Angles Quiz",
  },
  {
    type: "activity",
    length: [60],
    repeats: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    name: "Piano",
  },
  {
    type: "scheduled",
    repeats: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    time: {
      start: 16,
      end: 24,
    },
    name: "Very Real Event",
  },
];
