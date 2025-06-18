import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import ThemeProvider from 'app/provider/ThemeProvider/ui/ThemeProvider';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
