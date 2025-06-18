import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/provider/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './provider/ThemeProvider';
import './styles/index.scss';

const App: FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    throw new Error('hello');
  });

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="app__content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
