import React, { useEffect } from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import { Leagues } from "./components/Leagues";

function App() {
    useEffect(() => localStorage.clear(), []);
    return (
        <div className="App">
            <Auth>
                <Leagues />
            </Auth>
        </div>
    );
}

export default App;
