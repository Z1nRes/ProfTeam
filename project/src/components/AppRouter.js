import React, { Component, path } from "react";
import {Route, Routes, Redirect} from 'react-router-dom';
import { authRoutes } from "../routes";


const AppRouter = () => {
    const isAuth = false
    return(
            <Routes>
                <Route path="/" element={<Shop />} />
            </Routes>
    );
};

export default AppRouter;