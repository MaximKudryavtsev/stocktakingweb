import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styles";
import * as React from "react";
import { Component, ReactNode } from "react";
import { ISidebarProps } from "./ISidebarProps";
import { Logo } from "../../components/logo";
import { Avatar } from "../../components/avatar";
import { Menu } from "../menu";
import { AppContext } from "../../context";
import { GoogleLogout } from "react-google-login";

export const Sidebar = withStyles(styles)(
    class extends Component<ISidebarProps> {

        render(): ReactNode {
            return (
                <div className={this.props.classes.sidebar}>
                    <Logo className={this.props.classes.sidebarItem} />
                    <Avatar
                        user={AppContext.getUserStore().user}
                        className={this.props.classes.sidebarItem}
                    />
                    <Menu
                        data={this.props.data}
                        onOpenOptions={this.props.onOpenOptions}
                        onChangeActive={this.props.onChangeActive}
                        onChangePosition={this.props.onChangePosition}
                    />
                    <div className={this.props.classes.logoutButton}>
                        <GoogleLogout
                            clientId={AppContext.getUserStore().getGoogleId()}
                            buttonText={"Выход"}
                        />
                    </div>
                </div>
            );
        }
    }
);
