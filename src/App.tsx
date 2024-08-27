import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";

import { Component } from "react";
import Demo from "./pages/demo";
import Timeout from "./pages/timeout";
import Token from "./pages/token";

export class App extends Component {
    render() {
        return (
            <div className="App">
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
