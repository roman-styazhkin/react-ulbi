import { counterReducer, CounterSchema } from 'widgets/Counter';
import { counterActions } from 'widgets/Counter/model/slice/counterSlice';

describe('counterSlice', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('increment', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('should return value with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
