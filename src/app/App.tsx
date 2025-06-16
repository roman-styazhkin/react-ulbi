import {FC, Suspense} from "react";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "./provider/ThemeProvider";
import {AppRouter} from "app/provider/AppRouter";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import './styles/index.scss';
import {useTranslation} from "react-i18next";

const TestComponent: FC = () => {
    const { t, i18n } = useTranslation();

    const onChangeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <div>
            <span>{t('Тестовый пример')}</span>
            <button onClick={onChangeLanguage} type="button">Перевести</button>
        </div>
    )
}
const App: FC = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <Suspense fallback="">
                <TestComponent />
            </Suspense>

            <div className="app__content">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;