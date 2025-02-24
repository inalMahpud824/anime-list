import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AnimesAiringPage from './page/AnimesAiring.jsx'
import AnimesPopularPage from './page/AnimesPopular.jsx'
import SearchResultsPage from './page/SearchResults.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/animes/airing",
    element: <AnimesAiringPage />,
  },
  {
    path: "/animes/popular",
    element: <AnimesPopularPage />,
  },
  {
    path: "/animes/search-results",
    element: <SearchResultsPage />
  },
  {
    path: "/anime/:id",
    element: <AnimesAiringPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
