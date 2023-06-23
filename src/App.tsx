import React from 'react';
import './App.css';
import AppLayout from "./Layout";
import AppRoutes from "./routes";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <AppLayout>
            <AppRoutes/>
          </AppLayout>
      </BrowserRouter>
  );
}

export default App;
