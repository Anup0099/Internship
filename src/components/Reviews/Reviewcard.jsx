import React from "react";
import images from "../images";
import "./reviewcard.css";
import items from "./item";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import { Avatar } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import BookmarkIcon from "@mui/icons-material/Bookmark";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ReviewCard = () => {
  return (
    <div className="app__body">
    <div className='app__review' >
    <div className="review-header">
      <div className='shows' style={{
        color: 'white', fontFamily: 'Libre Baskerville', fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '32px',
        paddingTop: '4rem'
      }}>Reviews
        <hr />
      </div>
      <div style={{
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px', color: 'rgba(255,255,255,0.8)'
      }} className='view'>
        1<div style={{
          fontFamily: 'Nunito',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '16px', color: 'rgba(255,255,255,0.5)', marginRight: '0.5rem'
        }}>/12</div>
        <Button>
          <ArrowBackIcon style={{ color: '#FFFFFF', opacity: '0.6', width: '18.75px' }} />
        </Button>
        <Button>
          <ArrowForwardIcon style={{ color: '#FFFFFF', opacity: '0.6', width: '18.75px' }} />
        </Button>

      </div>
    </div>
  </div>
  <div className='app__review-card'>
    <div className='review'>
      <Card sx={{ maxWidth: 345, background: '#0A0B1A' }}>
        <CardHeader
          style={{ color: 'rgba(255,255,255, 1' }}
          avatar={
            <Avatar src={images.Hellen} aria-label="Hellen"></Avatar>
          }
          title="Hellen Jummy"
          subheader={
            <Typography variant='body' color='#E5C558' fontFamily='Rubik' display='flex' fontSize='11px' alignItems='center'>
              <Avatar src={images.Us} aria-label="Us" sx={{ width: 20, height: 20 }}
              ></Avatar>
              PALO ALTO, CA
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body" color="rgba(255,255,255, 0.9)" textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget {<br />} laoreet adipiscing.
          </Typography>
        </CardContent>
      </Card>
    </div>
    <div className='review'>
      <Card sx={{ maxWidth: 345, background: '#0A0B1A' }}>
        <CardHeader
          style={{ color: 'rgba(255,255,255, 1' }}
          avatar={
            <Avatar src={images.Isaac} aria-label="Hellen"></Avatar>
          }
          title="Isaac Oluwatemilorun"
          subheader={
            <Typography variant='body' color='#E5C558' fontFamily='Rubik' display='flex' fontSize='11px' alignItems='center'>
              <Avatar src={images.fran} aria-label="Us" sx={{ width: 20, height: 20 }}
              ></Avatar>
              PALO ALTO, CA
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body" color="rgba(255,255,255, 0.9)" textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget {<br />} laoreet adipiscing.
          </Typography>
        </CardContent>
      </Card>
    </div>
    <div className='review'>
      <Card sx={{ maxWidth: 345, background: '#0A0B1A' }}>
        <CardHeader
          style={{ color: 'rgba(255,255,255, 1' }}
          avatar={
            <Avatar src={images.Hellen2} aria-label="Hellen"></Avatar>
          }
          title="Hellen Jummy"
          subheader={
            <Typography variant='body' color='#E5C558' fontFamily='Rubik' display='flex' fontSize='11px' alignItems='center'>
              <Avatar src={images.Us} aria-label="Us" sx={{ width: 20, height: 20 }}
              ></Avatar>
              PALO ALTO, CA
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body" color="rgba(255,255,255, 0.9)" textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget {<br />} laoreet adipiscing.
          </Typography>
        </CardContent>
      </Card>
    </div>
  </div>
    </div>
  );
};

export default ReviewCard;
