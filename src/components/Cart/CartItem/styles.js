import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    media: {
        height: "0",
        paddingTop: "56.25%",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
    },
    cartActions: {
        justifyContent: "space-between",
    },
    buttons: {
        display: "flex",
        alignItems: "center",
    },
    cardContentAndActions: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
}));
