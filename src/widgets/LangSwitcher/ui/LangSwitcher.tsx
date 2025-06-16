import {FC} from 'react';
import {classNames} from 'shared/lib/classNames';
import {Button} from "shared/ui/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    return (
        <Button className={classNames('', {}, [className])}>
        </Button>
    );
};
