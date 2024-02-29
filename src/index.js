import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Profile from './pages/Profile';
import Table from './pages/Table';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/table",
    element: <Table/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
