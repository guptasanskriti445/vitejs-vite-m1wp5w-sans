import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home.jsx';
import TypingApp from './pages/typer/typingApp.jsx';
import { store } from './redux/store.js';
import { Provider } from 'react-redux'
import RegistationForm from './pages/register/RegistationForm.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/typing-speed-test',
        element: <TypingApp />,
      },
      {
        path: '/registation',
        element: <RegistationForm />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
