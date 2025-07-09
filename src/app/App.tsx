import { FC, Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/provider/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from '../shared/ui/Modal/Modal';
import { useTheme } from './provider/ThemeProvider';
import './styles/index.scss';

const App: FC = () => {
  const { theme } = useTheme();
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={() => setIsModalOpened(true)} type="button">Toggle Modal</button>
      <Modal
        isOpen={isModalOpened}
        onClose={() => setIsModalOpened(false)}
      />
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
