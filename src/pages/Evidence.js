import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
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
              <i className="fas fa-photo-video fa-5x" style={{color: 'purple'}} />
            </Typography>
            <Button size="large" color="primary">
              Evidence
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
          {"Upload Your Evidence"}
        </DialogTitle>
        <DialogContent>
          <Card className={[classes.card]}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <i
                    className="fas fa-cloud-upload-alt fa-4x"
                    style={{ color: "#161183" }}
                  />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </DialogContent>
        
      </Dialog>
    </React.Fragment>
  );
}
