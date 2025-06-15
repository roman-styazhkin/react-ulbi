import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {Suspense} from "react";
import {classNames} from "../helpers/classNames";
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
                    <Route element={<MainPageAsync />} path={'/'} />
                    <Route element={<AboutPageAsync />} path={'/about'} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;