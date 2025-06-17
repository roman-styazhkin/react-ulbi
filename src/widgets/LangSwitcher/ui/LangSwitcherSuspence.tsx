import {FC, Suspense} from 'react';
import {LangSwitcher} from "./LangSwitcher";

export const LangSwitcherSuspence: FC = () => {
    return (
        <Suspense fallback="">
            <LangSwitcher />
        </Suspense>
    );
};
