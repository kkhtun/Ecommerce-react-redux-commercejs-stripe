import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: "none",
        borderBottom: "1px solid rgba(0,0,0,0.2)",
    },
    title: {
        display: "flex",
        alignItems: "center",
        flexGrow: "1",
        textDecoration: "none",
    },
    grow: {
        flexGrow: "1",
    },
}));
