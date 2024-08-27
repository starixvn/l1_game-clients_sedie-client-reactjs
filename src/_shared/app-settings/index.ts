import * as gc from "@sg/sg-game-client";
import configs from "../../configs.json";
import gameSettings from "../../game-settings.json";
import AppSettings from "./type";

const appSettings: AppSettings = {
    ...configs,
    gameSettings,
};

export const getSiteConfig = (gameId: number) => {
    const gameSetting = appSettings.gameSettings[gameId];
    const config: gc.Configs.SiteConfigs = {
        isDev: false, // if this property is true, then you should add token=anything into the querytring to sso to the game http://localhost:7456/?token=anything
        systemType: "SG",
        serverDomainMapper: appSettings.serverDomainMapper,
        ssl: appSettings.ssl,
        subDomain: appSettings.subDomain,
        env: appSettings.env,
        enableMsgpackParserAllGames: appSettings.enableMsgpackParserAllGames,
        enableMsgpackParserOnNotification: appSettings.enableMsgpackParserOnNotification,
        websocket: gameSetting.websocket,
        mainObserverNamespace: gameSetting.mainObserverNamespace,
        storagePrefixKey: gameSetting.storagePrefixKey,
        subGuideDomain: gameSetting.storagePrefixKey,
    };

    gc.Shared.utils.StorageManager.setPrefixKey(gameSetting.storagePrefixKey);

    console.log("config----------", config);

    return config;
};

export const getGameSetting = (gameId: number) => {
    return appSettings.gameSettings[gameId];
};

export default appSettings;
