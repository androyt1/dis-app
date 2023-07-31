function formatDateToLocale(dateString) {
  // Parse the provided date string to a Date object
  const date = new Date(dateString);

  // Check if the parsed date is valid
  if (isNaN(date)) {
    throw new Error('Invalid date string');
  }

  // Get the user's locale from the browser, default to UK if not available
  const userLocale = navigator.language || 'en-GB';

  // Check if the input date string is in the '2023-07-25T16:51:43.647Z' format
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
  if (isoDateRegex.test(dateString)) {
    // Convert the ISO date string to a Date object
    const isoDate = new Date(dateString);

    // Create a locale-specific date formatter for the ISO date
    const isoDateFormatter = new Intl.DateTimeFormat(userLocale, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Use 24-hour format
    });

    // Format the ISO date using the locale-specific formatter
    let formattedISODate = isoDateFormatter.format(isoDate);

    // Replace forward slashes ('/') with dashes ('-')
    formattedISODate = formattedISODate.replace(/\//g, '-');

    return formattedISODate;
  } else {
    // Create a locale-specific date formatter for the input date
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
}
