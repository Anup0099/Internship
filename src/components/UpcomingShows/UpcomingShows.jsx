import React, { useState } from "react";
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
  const [isBookmarked, setIsBookmarked] = useState(
    false
  );
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    
  };
 

  return (
    <div className="upcoming">
      <div className="upcoming-title">
        <h1>Upcoming Shows</h1>

        <h2>View more</h2>
      </div>
      <div className="upcoming-cards">
        <Card sx={{ maxWidth: 400, boxShadow: "  10px -16px blue" ,borderRadius:"10px" }}>
          <CardMedia
            component="img"
            height="160"
            image={images.Benny}
            alt="green iguana"
          />
          <CardContent
            sx={{
              backgroundColor: "black",
            }}
          >
            <Button
              sx={{
                color: "white",
                backgroundColor: "#00bcd4",
              }}
            >
              Folk
            </Button>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              Benny Dyal
            </Typography>
            <Button>
              View more
              <ArrowRightAltIcon />
            </Button>
            <Button onClick={handleBookmark} classname="bookmark">
            {isBookmarked ? <BookmarkIcon/>:<BookmarkBorderOutlinedIcon/>} 
            </Button>
          </CardContent>
        </Card>
        {/* 2 */}
        <Card sx={{ maxWidth: 400, boxShadow: "  10px -16px blue",borderRadius:"10px" }}>
          <CardMedia
            component="img"
            height="160"
            image={images.Benny}
            alt="green iguana"
          />
          <CardContent
            sx={{
              backgroundColor: "black",
            }}
          >
            <Button
              sx={{
                color: "white",
                backgroundColor: "#00bcd4",
              }}
            >
              Folk
            </Button>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              Benny Dyal
            </Typography>
            <Button>
              View more
              <ArrowRightAltIcon />
            </Button>
            <Button onClick={handleBookmark} classname="bookmark">
            {isBookmarked ? <BookmarkIcon/> :<BookmarkBorderOutlinedIcon/>} 
            </Button>
          </CardContent>
        </Card>

        {/* 3 */}
        <Card sx={{ maxWidth: 400, boxShadow: "  10px -16px blue",borderRadius:"10px" }}>
          <CardMedia
            component="img"
            height="160"
            image={images.Benny}
            alt="green iguana"
          />
          <CardContent
            sx={{
              backgroundColor: "black",
            }}
          >
            <Button
              sx={{
                color: "white",
                backgroundColor: "#00bcd4",
              }}
            >
              Folk
            </Button>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              Benny Dyal
            </Typography>
            <Button>
              View more
              <ArrowRightAltIcon />
            </Button>
            <Button onClick={handleBookmark} classname="bookmark">
            {isBookmarked ? <BookmarkIcon/>:<BookmarkBorderOutlinedIcon/>} 
            </Button>
          </CardContent>
        </Card>
        {/* 4 */}
        <Card sx={{ maxWidth: 400,  boxShadow: "  10px -16px blue", borderRadius:"10px" }}>
          <CardMedia
            component="img"
            height="160"
            image={images.Benny}
            alt="green iguana"
          />
          <CardContent
            sx={{
              backgroundColor: "black",
            }}
          >
            <Button
              sx={{
                color: "white",
                backgroundColor: "#00bcd4",
              }}
            >
              Folk
            </Button>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              Benny Dyal
            </Typography>
            <Button>
              View more
              <ArrowRightAltIcon />
            </Button>
            <Button onClick={handleBookmark} >
            {isBookmarked ?<BookmarkIcon/>: <BookmarkBorderOutlinedIcon/>} 
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingShows;
