import { FC, Suspense } from 'react';
import { LangSwitcher } from './LangSwitcher';

export const LangSwitcherSuspence: FC = () => (
  <Suspense fallback="">
    <LangSwitcher />
  </Suspense>
);
