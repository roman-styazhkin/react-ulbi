import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
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
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
