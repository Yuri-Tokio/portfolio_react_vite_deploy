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
    path: "/",
    element: <HomePage />,
  },
  {
    path: "certificados",
    element: <CertificadosPage />,
  },
  {
    path: "projects",
    element: <ProjectsPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
