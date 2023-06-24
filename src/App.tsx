import React from 'react';
import './App.css';
import AppLayout from "./Layout";
import AppRoutes from "./routes";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {index} from "./store";
import Notification from "./context/Notification";

function App() {
    return (
        <Notification>
            <Provider store={index}>
                <BrowserRouter>
                    <AppLayout>
                        <AppRoutes/>
                    </AppLayout>
                </BrowserRouter>
            </Provider>
        </Notification>
    );
}

export default App;
