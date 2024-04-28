import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoutes';
import Home from "./pages/HomePage";
import ChatPage from './pages/ChatPage';
import Login from './pages/Login';
const AppLayout = ()=>{
  return(
    <>
      <span>Test the page</span>
      <Outlet />
    </>
  )
}
const appRoutes = createBrowserRouter([{
  path:"/",
  element:<AppLayout />,
  children:[{
    path:'/',
    element:<Home />
  },{
    path:'/chat',
    element:<ProtectedRoute element={<ChatPage/>}/>
  },{
    path:'/login',
    element:<Login/>
  }]
}])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRoutes}/>)