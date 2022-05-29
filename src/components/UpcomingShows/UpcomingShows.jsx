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
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isBookmarked1, setIsBookmarked2] = useState(false);
  const [isBookmarked2, setIsBookmarked4] = useState(false);
  const [isBookmarked3, setIsBookmarked6] = useState(false);
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  const handleBookmark2 = () => {
    setIsBookmarked2(!isBookmarked1);
  };
  const handleBookmark3 = () => {
    setIsBookmarked4(!isBookmarked2);
  };
  const handleBookmark4 = () => {
    setIsBookmarked6(!isBookmarked3);
  };

  return (
    <div className="upcoming">
      <div className="upcoming-title" >
        <h1>Upcoming Shows</h1>

        <h2>More Info</h2>
      </div>
      <div className="upcoming-cards">
        <Card
          sx={{
            maxWidth: 345,
            boxShadow: "  10px -16px #301A68",
            borderRadius: "10px",
          }}
        >
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
                backgroundColor: "#E5C558",
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
            <Button style={{textTransform:'none'}}>
              More Info
              <ArrowRightAltIcon />
            </Button>
            <Button onClick={handleBookmark} classname="bookmark" color={isBookmarked ? 'secondary': 'primary'}>
              <BookmarkIcon />
            </Button>
          </CardContent>
        </Card>
        {/* 2 */}
        <Card
          sx={{
            maxWidth: 345,
            boxShadow: "  10px -16px #301A68",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            height="160"
            image={images.Vijay}
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
                backgroundColor: "#E5C558",
              }}
            >
              BOLLYWOOD
            </Button>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              Vijay Yesudas
            </Typography>
            <Button style={{textTransform:'none'}}>
              More Info
              <ArrowRightAltIcon />
            </Button>
            <Button onClick={handleBookmark2} classname="bookmark" color={isBookmarked1 ? 'secondary': 'primary'}>
            <BookmarkIcon />
              
            </Button>
          </CardContent>
        </Card>

        {/* 3 */}
        <Card
          sx={{
            maxWidth: 345,
            boxShadow: "  10px -16px #301A68",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            height="160"
            image={images.Andrea}
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
                backgroundColor: "#E5C558",
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
              Andrea Vollmer
            </Typography>
            <Button style={{textTransform:'none'}}>
              More Info
              <ArrowRightAltIcon />
            </Button>
            <Button onClick={handleBookmark3} className="bookmark" color={isBookmarked2 ? 'secondary': 'primary'}>

            <BookmarkIcon />
            
            </Button>
          </CardContent>
        </Card>
        {/* 4 */}
        <Card
          sx={{
            maxWidth: 345,
            boxShadow: "  10px -16px #301A68",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            height="160"
            image={images.Shilpa}
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
                backgroundColor: "#E5C558",
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
              Shilpa Rao
            </Typography>
            <Button style={{textTransform:'none'}}>
              More Info
              <ArrowRightAltIcon />
            </Button>
            <Button onClick={handleBookmark4} color={isBookmarked3 ? 'secondary': 'primary'}>
              <BookmarkIcon/>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingShows;
