const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDateSuffix(date: number) {
  const digit = date % 10;

  if (date >= 10 && date <= 20) {
    return "th";
  } else if (digit === 1) {
    return "st";
  } else if (digit === 2) {
    return "nd";
  } else if (digit === 3) {
    return "rd";
  } else {
    return "th";
  }
}

export function dateToLongString(d: Date) {
  const month = d.getMonth();
  const day = d.getDate();
  const year = d.getFullYear();

  return months[month] + " " + day + getDateSuffix(day) + ", " + year;
}
