import {Suspense} from "react";
import {Link, Route, Routes} from 'react-router-dom';
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "./provider/ThemeProvider";
import './styles/index.scss';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme} type="button">Toggle theme</button>
            <Link to={'/'}>Home Page</Link>
            <Link to={'about'}>About page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route element={<MainPage />} path={'/'} />
                    <Route element={<AboutPage />} path={'/about'} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;