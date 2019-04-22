import * as React from "react";
import { Component, ReactNode } from "react";
import { autobind } from "core-decorators";
import GoogleLogin from "react-google-login";

@autobind
export class Login extends Component {
    render(): ReactNode {
        return (
            <GoogleLogin
                clientId={"432192894002-qbr08npl8o15ugp1m535o4f21j7qrv1i.apps.googleusercontent.com"}
                buttonText={"Войти"}
                onSuccess={(response) => console.log(response)}
                onFailure={(error) => console.log(error)}
            />
        );
    }
}
