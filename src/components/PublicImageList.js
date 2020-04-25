import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PublicImageList = () => {
  const classes = useStyles();
  const [publicImages, setPublicImages] = useState([]);

  return (
    <div className="my-8 flex flex-col w-1/2">
      <Typography>Page 1 of 4 pages</Typography>
      <div className="flex flex-row justify-between">
        <Button variant="outlined">&lt; Previous Page</Button>
        <Button variant="outlined" className="ml-16">
          Next Page &gt;
        </Button>
      </div>
      {publicImages.map((key) => (
        <Card className="w-full my-4" key={key}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default PublicImageList;
