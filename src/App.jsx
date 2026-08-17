import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'product/:slug', element: <ProductPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
