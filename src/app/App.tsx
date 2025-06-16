import {FC} from "react";
import {Link} from 'react-router-dom';
import {classNames} from "shared/lib/classNames";
import {useTheme} from "./provider/ThemeProvider";
import {AppRouter} from "app/provider/AppRouter";
import {Navbar} from "widgets/Navbar";
import './styles/index.scss';

const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme} type="button">Toggle theme</button>
            <AppRouter />
        </div>
    );
};

export default App;