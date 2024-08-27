import configs from "../../configs.json";
import gameSettings from "../../game-settings.json";

import AppSettings from "./type";

// Merging settings into one object
const appSettings: AppSettings = {
    ...configs,
    gameSettings,
};

export default appSettings;
