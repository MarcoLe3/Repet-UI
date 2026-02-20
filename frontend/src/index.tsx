// @ts-ignore
import './index.css'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {publicRoutes} from './routes/publicRoutes'

const router = createBrowserRouter(publicRoutes);
const container = document.querySelector("#root");

const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);