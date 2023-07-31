function formatDateToLocale(dateString) {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
  if (isoDateRegex.test(dateString)) {
    // Extract date components from ISO date string
    const [datePart, timePart] = dateString.split('T');
    const [year, month, day] = datePart.split('-');
    const [time, milliseconds] = timePart.split('.');
    const [hour, minute, second] = time.split(':');

    // Get the user's locale from the browser, default to UK if not available
    const userLocale = navigator.language || 'en-GB';

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

    // Assemble the date components for formatting
    const isoDateToFormat = new Date(
      Date.UTC(year, month - 1, day, hour, minute, second, milliseconds)
    );

    // Format the ISO date using the locale-specific formatter
    let formattedISODate = isoDateFormatter.format(isoDateToFormat);

    // Replace forward slashes ('/') with dashes ('-')
    formattedISODate = formattedISODate.replace(/\//g, '-');

    return formattedISODate;
  } else {
    // Continue with the existing logic for non-ISO date strings
    // ...
  }
}
