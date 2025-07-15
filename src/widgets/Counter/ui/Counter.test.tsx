import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/dom';
import { Counter } from 'widgets/Counter';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
  test('render in the document', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const counterElement = screen.getByTestId('counter-title');
    expect(counterElement).toHaveTextContent('10');
  });

  test('increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const counterElement = screen.getByTestId('counter-title');
    const incrementBtn = screen.getByTestId('increment-btn');
    userEvent.click(incrementBtn);
    expect(counterElement).toHaveTextContent('11');
  });

  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const counterElement = screen.getByTestId('counter-title');
    const decrementBtn = screen.getByTestId('decrement-btn');
    userEvent.click(decrementBtn);
    expect(counterElement).toHaveTextContent('9');
  });
});
