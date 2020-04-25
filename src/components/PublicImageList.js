import React, { useEffect } from "react";
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
import { connect } from "react-redux";
import getPublicPhotos from "../state_management/api";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

let PublicImageList = ({ getPhotos, photos }) => {
  const classes = useStyles();

  useEffect(() => getPhotos(), []);

  return (
    <div className="my-8 flex flex-col w-1/2">
      <Typography>Page 1 of 4 pages</Typography>
      <div className="flex flex-row justify-between">
        <Button variant="outlined">&lt; Previous Page</Button>
        <Button variant="outlined" className="ml-16">
          Next Page &gt;
        </Button>
      </div>
      {photos.map((photo, key) => (
        <Card className="w-full my-4" key={key}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={photo.media.m}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {!photo.title ? "No Title" : photo.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ photos: state.photos });

const mapDispatchToProps = { getPhotos: getPublicPhotos };

PublicImageList = connect(mapStateToProps, mapDispatchToProps)(PublicImageList);
export default PublicImageList;
