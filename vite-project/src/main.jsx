import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AlumnosProvider } from '../components/AlumnosCont.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AlumnosProvider>
        <App />
      </AlumnosProvider>
    </BrowserRouter>
  </StrictMode>
);
