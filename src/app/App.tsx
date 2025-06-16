import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "./provider/ThemeProvider";
import {AppRouter} from "app/provider/AppRouter";
import {Navbar} from "widgets/Navbar";
import './styles/index.scss';

const App: FC = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;