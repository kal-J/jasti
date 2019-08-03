import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function Evidence() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <Card
        className={[classes.card,"col-sm-4 col-xs-12 text-center"]}
        onClick={handleClickOpen}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <i className="fas fa-chalkboard-teacher fa-5x" />
            </Typography>
            <Button size="large" color="primary">
              Learn
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Get started"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is where new users will come to get started with using our platform...
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
    </React.Fragment>
  );
}
