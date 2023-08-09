function convertDate(createdDate) {
  if (!createdDate) {
    return 'N/A'; // Return a default value when createdDate is empty
  }

  const date = new Date(createdDate);
  if (isNaN(date)) {
    return 'Invalid Date'; // Return an error message for invalid date
  }

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}
// test cases
describe('convertDate', () => {
  it('converts a valid date string to formatted date', () => {
    const inputDate = '2023-08-06T10:30:00Z';
    const expectedOutput = '06/08/2023';
    const result = convertDate(inputDate);
    expect(result).toBe(expectedOutput);
  });

  it('pads single-digit day and month with leading zero', () => {
    const inputDate = '2023-05-02T10:30:00Z';
    const expectedOutput = '02/05/2023';
    const result = convertDate(inputDate);
    expect(result).toBe(expectedOutput);
  });

  it('handles different date formats', () => {
    const inputDate = '2023-12-25T10:30:00Z';
    const expectedOutput = '25/12/2023';
    const result = convertDate(inputDate);
    expect(result).toBe(expectedOutput);
  });

  it('returns "N/A" for empty createdDate', () => {
    const inputDate = '';
    const expectedOutput = 'N/A';
    const result = convertDate(inputDate);
    expect(result).toBe(expectedOutput);
  });

  it('returns "Invalid Date" for invalid createdDate', () => {
    const inputDate = 'not-a-valid-date';
    const expectedOutput = 'Invalid Date';
    const result = convertDate(inputDate);
    expect(result).toBe(expectedOutput);
  });
});
