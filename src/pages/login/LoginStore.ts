import { autobind } from "core-decorators";
import { GoogleLoginResponse } from "react-google-login";
import { AppContext } from "../../context";
import { EPaths } from "../../config";

@autobind
export class LoginStore {
    onSuccess(response: GoogleLoginResponse): void {
        AppContext.getUserStore().user = {
            googleId: response.getBasicProfile().getId(),
            name: response.getBasicProfile().getName(),
            imageUrl: response.getBasicProfile().getImageUrl(),
            email: response.getBasicProfile().getEmail()
        };
        AppContext.getHistory().push(EPaths.MAIN);
    }
}
