import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignUp";
import SignUp from "./pages/SignIn";
import Movies from "./pages/Movies";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </BrowserRouter>
    );
};
