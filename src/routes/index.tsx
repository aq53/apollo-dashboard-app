import React from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import {ROUTE_PATHS} from "../constants/routePaths";

export default function AppRoutes(){
    return(
            <Routes>
                <Route path={ROUTE_PATHS.USERS} element={<Users/>}/>
                <Route path={ROUTE_PATHS.POSTS} element={<Posts/>}/>
                <Route path={ROUTE_PATHS.DASHBOARD} element={<Dashboard/>}/>
            </Routes>
    )
}
