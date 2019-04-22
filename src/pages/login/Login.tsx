import * as React from "react";
import { Component, ReactNode } from "react";
import { autobind } from "core-decorators";
import GoogleLogin from "react-google-login";
import { EGoogleData } from "../../config";
import { Wrapper } from "../../containers/wrapper";

@autobind
export class Login extends Component {
    render(): ReactNode {
        return (
            <Wrapper title={"Авторизация"}>
                <GoogleLogin
                    clientId={EGoogleData.CLIENT_ID_LOCAL}
                    buttonText={"Войти через Google"}
                    onSuccess={(response) => console.log(response)}
                    onFailure={(error) => console.log(error)}
                />
            </Wrapper>
        );
    }
}
