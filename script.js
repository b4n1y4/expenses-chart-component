const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const ele = document.getElementById("bars-container");

const max = Math.max(
  ...data.map((amt) => {
    return amt.amount;
  })
);

data.forEach((day) => {
  const container = document.createElement("div");
  container.classList.add("single-bar-container");

  const bar = document.createElement("div");
  bar.classList.add("bar");
  bar.style.height = `${day.amount * 2}px`;

  // setTimeout(() => {
  //   if (day.amount === max) {
  //     bar.classList.add("max-amount");
  //   }
  // }, 1000);
  if (day.amount === max) {
    bar.classList.add("max-amount");
  }
  container.appendChild(bar);

  const dayText = document.createElement("p");
  dayText.classList.add("txt", "color-light", "day");
  dayText.innerText = day.day;
  container.appendChild(dayText);

  ele.appendChild(container);
});
