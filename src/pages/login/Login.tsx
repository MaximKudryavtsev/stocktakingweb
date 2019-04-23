import * as React from "react";
import { Component, ReactNode } from "react";
import GoogleLogin from "react-google-login";
import { Wrapper } from "../../containers/wrapper";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styles";
import { ILoginProps } from "./ILoginProps";
import { observer } from "mobx-react";
import { LoginStore } from "./LoginStore";
import { AppContext } from "../../context";

export const Login = withStyles(styles)(
    observer(
        class extends Component<ILoginProps> {
            private readonly store = new LoginStore();

            render(): ReactNode {
                return (
                    <Wrapper title={"Авторизация"}>
                        <div className={this.props.classes.wrapper}>
                            <div className={this.props.classes.title}>Авторизация</div>
                            <GoogleLogin
                                clientId={AppContext.getUserStore().getGoogleId()}
                                buttonText={"Войти через Google"}
                                onSuccess={this.store.onSuccess}
                                onFailure={(error) => console.log(error)}
                            />
                        </div>
                    </Wrapper>
                );
            }
        }
    )
);
