import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Movielist from './pages/Movielist.jsx'
import Moviedetails from './pages/Moviedetails.jsx'
import Search from './pages/Search.jsx'
import Pagenotfound from './pages/Pagenotfound.jsx'
const urls = {
  'top-rated': `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
  'popular': `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
  'upcoming': `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
  'now-playing': `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Pagenotfound />,
    children: [
      {
        path: '',
        element: <Movielist query={urls['now-playing']} />
      },
      {
        path: '/movies/popular',
        element: <Movielist query={urls.popular} />
      },
      {
        path: '/movies/upcoming',
        element: <Movielist query={urls.upcoming} />
      },
      {
        path: '/movie/:id',
        element: <Moviedetails />
      },
      {
        path: '/movies/top-rated',
        element: <Movielist query={urls['top-rated']} />
      },
      {
        path: '/search',
        element: <Search />
      }, {
        path: '*',
        element: <Pagenotfound />
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
