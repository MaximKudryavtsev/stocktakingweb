import { WithStyles } from "@material-ui/core";
import { styles } from "./styles";
import { IUser } from "../../interfaces";

export interface IAvatarProps extends WithStyles<typeof styles> {
    user: IUser;
    className?: string;
}
