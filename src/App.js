export function formatdateByUserLocale(dateString) {
    const dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;
    const match = dateString.match(dateRegex);

    if (!match) {
        throw new Error('Invalid date string');
    }

    const [, year, month, day, hours, minutes, seconds, milliseconds] = match;

    const date = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds, milliseconds));

    if (isNaN(date)) {
        throw new Error('Invalid date string');
    }

    const userLocale = navigator.language || 'en-GB';
    const dateFormatter = new Intl.DateTimeFormat(userLocale, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const formattedDate = dateFormatter.format(date).replace(/\//g, '-');
    return formattedDate;
}
