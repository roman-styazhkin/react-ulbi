import {FC} from 'react';
import {classNames} from 'shared/lib/classNames';
import {Button} from "shared/ui/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const onChangeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            onClick={onChangeLanguage}
            className={classNames('', {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};
