const dateFormat = (date) => {
    const d = new Date(date);
    const month = d.getMonth() + 1; // Adding 1 to get the correct month (as months are zero-indexed)
    const day = d.getDate(); // Use getDate() to get the day of the month
    const year = d.getFullYear(); // Use getFullYear() to get the full 4-digit year
    const hours = d.getHours();
    const mins = d.getMinutes();
    const seconds = d.getSeconds();
    return `${month}/${day}/${year} ${hours}:${mins}:${seconds}`;
  }

  module.exports = { dateFormat };
