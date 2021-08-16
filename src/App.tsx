import React from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import { Leagues } from "./components/Leagues";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Auth>
                    <Leagues />
                </Auth>
            </header>
        </div>
    );
}

export default App;
