import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import  Auth  from './components/Auth';
import { Home } from './components/Home';
import AuthCtx from "./context/auth";
import axios from "./ultis/axios"



const App = () => {
  const [authUser, setAuthUser] = useState(null);
  

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    
    try {
      axios.post('/auth/me', null, {
        headers:  {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (err) {

    }
  }, [] )

  return (
    <AuthCtx.Provider value={{authUser, setAuthUser}}>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />
    </AuthCtx.Provider>
  );
};

export default App;
