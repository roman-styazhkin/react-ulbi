import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('some class')).toBe('some class');
  });

  test('with additional class', () => {
    const result = 'some class one two three';
    expect(classNames('some class', {}, ['one', 'two', 'three'])).toBe(result);
  });

  test('with mods and additional classes', () => {
    const result = 'some class one two scrollable selectable';
    expect(classNames('some class', { scrollable: true, selectable: true }, ['one', 'two'])).toBe(result);
  });

  test('with mods false and additional classes', () => {
    const result = 'some class one two scrollable';
    expect(classNames('some class', { scrollable: true, selectable: false }, ['one', 'two'])).toBe(result);
  });

  test('with mods undefined and additional classes', () => {
    const result = 'some class one two scrollable';
    expect(classNames('some class', { scrollable: true, selectable: undefined }, ['one', 'two'])).toBe(result);
  });
});
