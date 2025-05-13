import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from './layouts/MainLayouts.jsx';
import UserDetails from './components/UserDetails.jsx';
import Update from './components/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children:[
      {
        index: true,
        Component:App
      },
      {
        path:'user/:id',
        Component: UserDetails,
        loader: ({params})=> fetch(`http://localhost:3000/users/${params.id}`)
      },
      {
        path:'update/:id',
        Component: Update,
        loader: ({params})=> fetch(`http://localhost:3000/users/${params.id}`)
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
