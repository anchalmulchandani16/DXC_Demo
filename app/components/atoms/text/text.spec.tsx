import React from 'react';
import { render } from '@testing-library/react-native';
import Text from './index';

describe('Text', () => {
  const mockProps = {
    variant: 'body2',
    style: null,
    color: 'red',
  };

  it('renders properly', () => {
    const { getByText } = render(<Text {...mockProps}>Hello</Text>);
    const textComponent = getByText('Hello');
    expect(textComponent).toBeTruthy();
  });

  it('applies the correct variant style', () => {
    const { getByText } = render(<Text {...mockProps}>Hello</Text>);
    const textComponent = getByText('Hello');
  });

  it('applies the custom style', () => {
    const { getByText } = render(
      <Text {...mockProps} style={{ fontSize: 16 }}>
        Hello
      </Text>
    );
    const textComponent = getByText('Hello');
  });

  it('applies the correct color', () => {
    const { getByText } = render(<Text {...mockProps}>Hello</Text>);
    const textComponent = getByText('Hello');
  });
});
