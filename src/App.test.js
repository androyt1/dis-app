function convertDate(createdDate) {
  const date = new Date(createdDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

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

 
});
