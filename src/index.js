import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { StoreProvider } from "./store/store";
import {AuthProvider} from "./store/AuthContext";


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <StoreProvider>
      
      <App />
      
    </StoreProvider>
    </AuthProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
