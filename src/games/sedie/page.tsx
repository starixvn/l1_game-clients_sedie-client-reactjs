import * as gc from "@sg/sg-game-client";
import { observer, render } from "observer";
import React from "react";
import GameBase from "../../components/game-base";
import SeDieBetOptions from "./bet-options";

@observer("SeDie")
export default class SeDie extends GameBase<any> {
    constructor(props: any) {
        super(props);
    }

    @render(gc.Auth.AuthStore, (store) => store.isAuthorized)
    openGame(isAuthorized: boolean) {
        console.log("SeDie isAuthorized----------------", isAuthorized);
    }

    getRenderTemplate() {
        return (
            <React.Fragment>
                SeDie Game.....
                <span>ok</span>
                <SeDieBetOptions />
            </React.Fragment>
        );
    }
}
