import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from 'widgets/Counter';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(getCounter, (state: CounterSchema) => state.value);
