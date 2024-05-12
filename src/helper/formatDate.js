export function formatDate(inputDate) {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const dateParts = inputDate.split("-");
  //   const year = dateParts[0];
  const monthIndex = parseInt(dateParts[1]) - 1;
  const day = dateParts[2];

  const monthAbbreviation = months[monthIndex];

  return day + monthAbbreviation;
}
