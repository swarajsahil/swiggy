
import React, { useState } from 'react';
import ReactDOM  from 'react-dom/client';
import Body from './Components/Body';
import Header from './Components/Header';
import Error from './Components/Error';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from './Components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';

const App=()=>{
  const [newUser,setNewUser]=useState({
    name:"sagar",
    email:"sagar@gmail.com"
  })
    return(
      <Provider store={store}>
      <UserContext.Provider value={{
        user:newUser
      }}>
    <Header/>
    <Outlet/>
    </UserContext.Provider> 
    </Provider>
    )
}
const appLayout=createBrowserRouter([{
  path:"/",  
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
        path:"/",  
      element:<Body/>
    },
    {
        path:"/about",  
      element:<About/>
    },
    {
        path:"/contact",  
      element:<Contact/>
    },{
        path:"/cart",  
      element:<Cart/>
    },{
      path:"/restaurant/:resId",
      element:<RestaurantMenu/>
    }
  ]
}
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appLayout}/>);