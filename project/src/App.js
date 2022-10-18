import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import AppRouter from "./components/AppRouter"; 
// import Admin from "./pages/Admin";
// import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
// import DevicePage from "./pages/DevisePage";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/basket'>Basket</Link>
      </header>
      <Routes>
        <Route path="/" element={ <Shop /> } />
        <Route path="/basket" element={ <Basket /> } />
      </Routes>
    </>
  );
};

export default App;
