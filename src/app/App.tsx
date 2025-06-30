import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/provider/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './provider/ThemeProvider';
import './styles/index.scss';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="app__content">
        <Suspense fallback="">
          <Sidebar />
        </Suspense>
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
