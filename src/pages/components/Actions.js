import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function Actions() {
  const classes = useStyles();

  return (
    <div className=" justify-content-center">
      <div className="row">
        <Card className={[classes.card, "col-sm-4 col-xs-12 text-center"]}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <i class="fas fa-file-alt fa-5x" />
              </Typography>
              <Button size="large" color="primary">
                Report
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={[classes.card, "col-sm-4 col-xs-12 text-center"]}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <i class="fas fa-chalkboard-teacher fa-5x" />
              </Typography>
              <Button size="large" color="primary">
                Learn
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={[classes.card, "col-sm-4 col-xs-12 text-center"]}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <i class="far fa-chart-bar fa-5x" />
              </Typography>
              <Button size="large" color="primary">
                Statistics
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="row">
        
        <Card className={[classes.card, "col-sm-4 col-xs-12 text-center"]}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <i class="fas fa-users-cog fa-5x" />
              </Typography>
              <Button size="large" color="primary">
                Organisation
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={[classes.card, "col-sm-4 col-xs-12 text-center"]}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              <i class="fas fa-photo-video fa-5x"></i>
              </Typography>
              <Button size="large" color="primary">
                Evidence
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={[classes.card, "col-sm-4 col-xs-12 text-center"]}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              <i class="fas fa-question fa-5x"></i>
              </Typography>
              <Button size="large" color="primary">
                FAQ's
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="row">
        
        
      </div>
    </div>
  );
}
