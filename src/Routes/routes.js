import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from '../contexts/userContext';
import PrivateRoute from './privateRoute';

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import RegForm from "../pages/RegForm";
import RegForm2 from "../pages/RegForm/step2";
import Movies from "../pages/Movies";


export const Router = () => {
    const [client, setClient] = useState('')
    return (
        <UserContext.Provider value={{ client, setClient }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/signUp/RegForm" element={<RegForm />} />
                    <Route path="/signUp/RegForm2" element={<RegForm2 />} />
                    <Route path="/movies"
                        element={
                            <PrivateRoute>
                                <Movies />
                            </PrivateRoute>

                        } />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
};
