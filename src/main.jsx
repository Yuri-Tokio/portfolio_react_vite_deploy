import React from 'react'
import ReactDOM from 'react-dom/client'

import "./styles/main.sass";

// Configurando o router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importa as paginas

import HomePage from "./pages/HomePage";
import CertificadosPage from './pages/CertificadosPage';
import ProjectsPage from './pages/ProjectsPage';

const router = createBrowserRouter([
  {
    path: "/portfolio_react_vite_deploy/",
    element: <HomePage />,
  },
  {
    path: "portfolio_react_vite_deploy/certificados",
    element: <CertificadosPage />,
  },
  {
    path: "portfolio_react_vite_deploy/projects",
    element: <ProjectsPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
