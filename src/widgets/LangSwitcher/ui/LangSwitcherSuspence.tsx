import { FC, Suspense } from 'react';
import { LangSwitcher } from './LangSwitcher';

interface LangSwitcherProps {
    short?: boolean;
    className?: string;
}
export const LangSwitcherSuspence: FC<LangSwitcherProps> = (props) => (
  <Suspense fallback="">
    <LangSwitcher {...props} />
  </Suspense>
);
