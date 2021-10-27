import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        flexGrow: "1",
    },
    content: {
        flexGrow: "1",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));
