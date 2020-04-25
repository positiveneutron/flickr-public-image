import React, { useEffect, useState } from "react";
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
  const [isPagination, setIsPagination] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => getPhotos(), []);

  const handleSetPagination = () => {
    setIsPagination(!isPagination);
    isPagination ? setPage(1) : setPage(page);
  };
  return (
    <div className="my-8 flex flex-col w-1/2">
      <Typography
        className={
          isPagination
            ? "cursor-pointer text-red-500"
            : "cursor-pointer text-green-500"
        }
        onClick={() => handleSetPagination()}
      >
        {isPagination
          ? "Without pagination click here🤷‍♂️"
          : "With pagination click here💁‍♂️"}
      </Typography>

      {isPagination && (
        <React.Fragment>
          <Typography>
            Page {page} of {photos.length / 2} pages
          </Typography>
          <div className="flex flex-row justify-between">
            <Button
              disabled={page === 1 ? true : false}
              variant="outlined"
              onClick={() => setPage(page - 1)}
            >
              &lt; Previous Page
            </Button>
            <Button
              disabled={photos.length / 2 > page ? false : true}
              variant="outlined"
              className="ml-16"
              onClick={() => setPage(page + 1)}
            >
              Next Page &gt;
            </Button>
          </div>
        </React.Fragment>
      )}

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
