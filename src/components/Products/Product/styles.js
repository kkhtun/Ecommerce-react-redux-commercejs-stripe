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
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cardContentAndActions: {
        // Fix for horizontal align
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
}));
