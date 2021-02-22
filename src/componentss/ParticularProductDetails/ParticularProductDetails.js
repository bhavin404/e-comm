import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {useparams} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border:'1px solid black'
  },
  media: {
    height: 140,
  },
  container:{
    height:'100vh',
    width:'100vw',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',

  },
});

 const ParticularProductDetails = ({apiLink})  => {
  const classes = useStyles();
 

  return (
    <div className={classes.container}>
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={apiLink.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {apiLink.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {apiLink.description}
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
    
    </div>
  );
}

export default ParticularProductDetails
