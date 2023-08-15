import { render } from '@testing-library/react';
import { formatDateByUserLocale } from './UtilsFile'; 

describe('formatDateByUserLocale', () => {
  it('should return an empty string for an empty input', () => {
    const result = formatDateByUserLocale('');
    expect(result).toBe('');
  });

  it('should correctly format ISO8601 date strings', () => {
    const iso8601DateString = '2023-08-14T12:30:45.123Z';
    const formattedResult = formatDateByUserLocale(iso8601DateString);

    // Mock expected date format based on user locale (adjust as needed)
    const mockFormattedDate = '14/08/2023, 12:30:45';

    expect(formattedResult).toBe(mockFormattedDate);
  });

  it('should correctly format non-ISO8601 date strings', () => {
    const nonIso8601DateString = '2023-08-14 12:30:45';
    const formattedResult = formatDateByUserLocale(nonIso8601DateString);

    // Mock expected date format based on user locale (adjust as needed)
    const mockFormattedDate = '14/08/2023, 12:30:45';

    expect(formattedResult).toBe(mockFormattedDate);
  });

  it('should throw an error for invalid date strings', () => {
    const invalidDateString = 'invalid-date';
    
    expect(() => {
      formatDateByUserLocale(invalidDateString);
    }).toThrow('Invalid date string');
  });

  it('should format the date according to user locale', () => {
    // Mock a date string
    const dateString = '2023-08-14T12:30:45.123Z';
    
    // Mock the user locale to 'en-US' (adjust as needed)
    const { getByText } = render(
      <div>{formatDateByUserLocale(dateString)}</div>,
      { locale: 'en-US' }
    );
    
    // Mock expected date format based on 'en-US' locale (adjust as needed)
    const mockFormattedDate = '8/14/2023, 12:30:45 PM';

    expect(getByText(mockFormattedDate)).toBeInTheDocument();
  });
});
