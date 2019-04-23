import createStyles from "@material-ui/core/styles/createStyles";

export const styles = createStyles({
    wrapper: {
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%);",
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    title: {
        fontSize: 24,
        marginBottom: 30
    }
});
