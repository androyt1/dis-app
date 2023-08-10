import React from 'react';
import { render } from '@testing-library/react';
import { ProjectDetailsSubSection } from './ProjectDetailsSubSection'; 

describe('ProjectDetailsSubSection component', () => {
  test('renders correctly with loading state', () => {
    const { getByText } = render(
      <ProjectDetailsSubSection title="Title" value="Value" loading={true} />
    );

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Value')).toBeInTheDocument();
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('renders correctly without loading state', () => {
    const { getByText, queryByText } = render(
      <ProjectDetailsSubSection title="Title" value="Value" loading={false} />
    );

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Value')).toBeInTheDocument();
    expect(queryByText('Loading...')).toBeNull();
  });

  test('renders correctly with empty value and loading state', () => {
    const { getByText } = render(
      <ProjectDetailsSubSection title="Title" value="" loading={true} />
    );

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
