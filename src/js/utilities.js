const formatDate = () => {
  const date = new Date();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // Format 12-hour time
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for midnight
  const ampm = hours >= 12 ? "PM" : "AM";

  return `${month} ${day}, ${year} ${formattedHours}:${minutes} ${ampm}`;
};
