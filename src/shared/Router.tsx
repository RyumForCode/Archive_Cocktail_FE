import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SearchCocktail from "../pages/SearchCocktail";
import SignUp from "../pages/SignUp";
import StashSearch from "../pages/StashSearch";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<SearchCocktail />}/>
                <Route path = '/stash-search' element = {<StashSearch />}/>
                <Route path = '/log-in' element = {<LogIn />}/>
                <Route path = '/sign-up' element = {<SignUp />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;