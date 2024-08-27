import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import logo from "./logo.svg";

import { Component } from "react";
import Demo from "./pages/demo";
import Timeout from "./pages/timeout";
import Token from "./pages/token";

export class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
                <Router>
                    <Routes>
                        {/* Default route that shows the Demo page */}
                        <Route path="/" element={<Navigate to="/demo" />} />

                        <Route path="/timeout" element={<Timeout />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/token" element={<Token />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;
