import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Router.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './AuthProvider/AuthProvider.jsx';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>,
)
