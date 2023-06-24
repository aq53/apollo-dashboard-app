import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import {ROUTE_PATHS} from "../constants/routePaths";
import UserDetail from "../pages/Users/UserDetail";
import {useNotification} from "../context/Notification";
import {NOTIFICATION_ENUM} from "../enums";
import {NOTIFICATION_MESSAGES} from "../constants";

export default function AppRoutes() {
    const notification = useNotification();
    useEffect(() => {
        window.addEventListener("online", function () {
            notification.showNotification(NOTIFICATION_MESSAGES.INTERNET_CONNECTED, NOTIFICATION_ENUM.SUCCESS)
        })

        window.addEventListener("offline", function () {
            notification.showNotification(NOTIFICATION_MESSAGES.INTERNET_DISCONNECTED, NOTIFICATION_ENUM.ERROR)
        });

        return () => {
            window.removeEventListener("online", function () {
            });
            window.removeEventListener("offline", function () {
            });

        }
    }, [])
    return (
        <Routes>
            <Route path={ROUTE_PATHS.USER_DETAIL} element={<UserDetail/>}/>
            <Route path={ROUTE_PATHS.USERS} element={<Users/>}/>
            <Route path={ROUTE_PATHS.POSTS} element={<Posts/>}/>
            <Route path={ROUTE_PATHS.DASHBOARD} element={<Dashboard/>}/>
        </Routes>
    )
}
