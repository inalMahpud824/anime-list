import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AnimesAiringPage from './page/AnimesAiring.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/animes/airing',
    element: <AnimesAiringPage />
  },
  {
    path: '/anime/:id',
    element: <AnimesAiringPage />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
