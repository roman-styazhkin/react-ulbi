import { FC, Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/provider/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { useTheme } from './provider/ThemeProvider';
import './styles/index.scss';

const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(userAction.initAuthData());
  }, [dispatch]);

  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="app__content">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
