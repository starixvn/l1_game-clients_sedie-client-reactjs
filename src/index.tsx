import "reflect-metadata";
import { getSiteConfig } from "./_shared/app-settings";
import * as gc from "@sg/sg-game-client";
import "bootstrap/dist/css/bootstrap.min.css";
import * as mobx from "mobx";
import * as Observer from "observer";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getSharedContainer, startGame } from "./components/game-base/startup";
import { containerOptions, settings, siteConfigs } from "./games/sedie/game-settings";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const sharedContainer = getSharedContainer(getSiteConfig(2));
console.log("sharedContainer", sharedContainer);

Observer.configure({ default: { mobx, container: gc.buildObserverContainer(sharedContainer) } });
startGame(settings.name, containerOptions, siteConfigs, settings.namespaces);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// enableLogging();
