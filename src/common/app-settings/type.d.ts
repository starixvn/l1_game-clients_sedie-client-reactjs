export type GameSettingProps = {
    id: number;
    gameName: string;
};

interface ProxySetting {
    ssl: string;
    uri: string;
    path: string;
}

interface SentryOptions {
    dsn: string;
    environment: string;
}
export default interface AppSettings {
    sentry: SentryOptions;
    gameSettings: { [id: string]: GameSettingProps };
    system: string;
    resourceUrl: string;
    gameSettingUrl: string;
    gameLobbySimulatorUrl: string;
}
