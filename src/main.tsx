import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
// import App from './App.tsx'
// import Login from './Login/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
    <BrowserRouter>
    <MainRoutes/>
    </BrowserRouter>
  </StrictMode>,
)
