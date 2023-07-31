function formatDateToLocale(dateString) {
  // Check if the provided date string is in ISO 8601 format (e.g., '2023-07-25T16:51:43.647Z')
  const isISO8601 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(dateString);

  // If the date string is in ISO 8601 format, remove the 'Z' (indicating UTC) and create a Date object
  const date = isISO8601 ? new Date(dateString.replace('Z', '')) : new Date(dateString);

  // Check if the parsed date is valid
  if (isNaN(date)) {
    throw new Error('Invalid date string');
  }

  // Get the user's locale from the browser, default to UK if not available
  const userLocale = navigator.language || 'en-GB';

  // Create a locale-specific date formatter
  const dateFormatter = new Intl.DateTimeFormat(userLocale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Use 24-hour format
  });

  // Format the date using the locale-specific formatter
  let formattedDate = dateFormatter.format(date);

  // Replace forward slashes ('/') with dashes ('-')
  formattedDate = formattedDate.replace(/\//g, '-');

  return formattedDate;
}
