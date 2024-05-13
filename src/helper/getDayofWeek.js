export function getDayOfWeek(dateString) {
  // Create a Date object from the given dateString
  const date = new Date(dateString);

  // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const dayOfWeek = date.getDay();

  // Define an array of day names
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Return the corresponding day name
  return days[dayOfWeek];
}
