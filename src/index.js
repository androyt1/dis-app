import React from 'react';
import { render } from '@testing-library/react';
import { ProjectAlertMessage } from './ProjectAlertMessage'; // Adjust the path accordingly

describe('ProjectAlertMessage component', () => {
  test('renders correctly with "success" type', () => {
    const { getByText } = render(
      <ProjectAlertMessage type="success" text="Success message" />
    );

    expect(getByText('Success message')).toBeInTheDocument();
  });

  test('renders correctly with "warning" type', () => {
    const { getByText } = render(
      <ProjectAlertMessage type="warning" text="Warning message" />
    );

    expect(getByText('Warning message')).toBeInTheDocument();
  });

  test('renders correctly with "error" type', () => {
    const { getByText } = render(
      <ProjectAlertMessage type="error" text="Error message" />
    );

    expect(getByText('Error message')).toBeInTheDocument();
  });
});
