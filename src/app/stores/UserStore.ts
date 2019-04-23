import { autobind } from "core-decorators";
import { observable } from "mobx";
import { IUser } from "../../interfaces";
import { EGoogleData, EHosts } from "../../config";

@autobind
export class UserStore {
    @observable user: IUser = {
        googleId: "",
        name: "",
        email: "",
        imageUrl: ""
    };

    getGoogleId(): string {
        const host = window.location.href;
        if (host.indexOf(EHosts.LOCAL) >= 0) {
            return EGoogleData.CLIENT_ID_LOCAL;
        } else if (host.indexOf(EHosts.HEROKU) >= 0) {
            return EGoogleData.CLIENT_ID;
        } else {
            return  EGoogleData.CLIENT_ID;
        }
    }
}
