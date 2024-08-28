import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";

import * as gc from "@sg/sg-game-client";
import "bootstrap/dist/css/bootstrap.min.css";
import * as mobx from "mobx";
import * as Observer from "observer";
import { Component, lazy, Suspense } from "react";
import { sharedContainer, startGame } from "./components/game-base/startup";
import { containerOptions, settings, siteConfigs } from "./games/sedie/game-settings";

Observer.configure({ default: { mobx, container: gc.buildObserverContainer(sharedContainer) } });

startGame(settings.name, containerOptions, siteConfigs, settings.namespaces);

const Demo = lazy(() => import("./pages/demo"));
const Timeout = lazy(() => import("./pages/timeout"));
const Token = lazy(() => import("./pages/token"));

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            {/* Default route that shows the Demo page */}
                            <Route path="/" element={<Navigate to="/token" />} />

                            <Route path="/timeout" element={<Timeout />} />
                            <Route path="/demo" element={<Demo />} />
                            <Route path="/token" element={<Token />} />
                        </Routes>
                    </Suspense>
                </Router>
            </div>
        );
    }
}

export default App;
