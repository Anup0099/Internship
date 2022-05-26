import React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import images from "../images";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./upcoming.css";

import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const UpcomingShows = () => {
  return (
    <div className="upcoming">
      <div className="upcoming-title">
        <h1>upcoming shows</h1>

        <h2>view more</h2>
      </div>
      <div className="upcoming-cards">
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="160"
            image={images.Benny}
            alt="green iguana"
          />
          <CardContent>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#00bcd4",
              }}
            >
              Folk
            </Button>
            <Typography gutterBottom variant="h5" component="div">
              Benny Dyal
            </Typography>
            <Button>
              View more
              <ArrowRightAltIcon />
            </Button>
            <Button>
              <BookmarkBorderOutlinedIcon />
            </Button>
          </CardContent>
        </Card>
        {/* 2 */}
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="160"
            image={images.Benny}
            alt="green iguana"
          />
          <CardContent>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#00bcd4",
              }}
            >
              Folk
            </Button>
            <Typography gutterBottom variant="h5" component="div">
              Benny Dyal
            </Typography>
            <Button>
              View more
              <ArrowRightAltIcon />
            </Button>
            <Button>
              <BookmarkBorderOutlinedIcon />
            </Button>
          </CardContent>
        </Card>

        {/* 3 */}
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="160"
            image={images.Benny}
            alt="green iguana"
          />
          <CardContent>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#00bcd4",
              }}
            >
              Folk
            </Button>
            <Typography gutterBottom variant="h5" component="div">
              Benny Dyal
            </Typography>
            <Button>
              View more
              <ArrowRightAltIcon />
            </Button>
            <Button>
              <BookmarkBorderOutlinedIcon />
            </Button>
          </CardContent>
        </Card>
        {/* 4 */}
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="160"
            image={images.Benny}
            alt="green iguana"
          />
          <CardContent>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#00bcd4",
              }}
            >
              Folk
            </Button>
            <Typography gutterBottom variant="h5" component="div">
              Benny Dyal
            </Typography>
            <Button>
              View more
              <ArrowRightAltIcon />
            </Button>
            <Button>
              <BookmarkBorderOutlinedIcon />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingShows;
