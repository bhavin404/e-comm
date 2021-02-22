import React,{useState,useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';

import {useParams} from 'react-router-dom';
import ParticularProductDetails from '../ParticularProductDetails/ParticularProductDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    height:'500px',
    width:'800px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    border:'1px solid black',
    marginTop:'20px'
  },
  container:{
    height:'100vh',
    width:'100vw',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width:'700px',
    height:'400px',
    border:'1px solid black',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
      
      height:400,
    width: 900,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const ProductDetails = () => {
  const [category, setCategory] = useState([])
  const classes = useStyles();
  const theme = useTheme();

  //useparams
  const {id,categories} = useParams();
  const [apiLink, setApiLink] = useState({})

 

  //logics
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categories}`)
    .then(res=>res.json())
    .then(json=>setCategory(json))
  }, [])

  //particular product details
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setApiLink(json))
  }, [])

  return (
      <div className={classes.container}>
          <ParticularProductDetails apiLink={apiLink}/>
        {category.map(singleCategory => ( <Card className={classes.root}>

            
<CardMedia
  className={classes.cover}
  image={singleCategory.image}
  title="Live from space album cover"
/>

<div className={classes.details}>
  
  
  <CardContent className={classes.content}>
    <Typography component="h5" variant="h5">
      {singleCategory.title}
    </Typography>
    <Typography variant="subtitle1" color="textSecondary">
    Rs: {singleCategory.price}/-
    </Typography>
  </CardContent>
  <div className={classes.controls}>
  <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
      <ShareIcon />
      </IconButton>
      
      <Button variant="contained" color="primary">
          Add to cart
      </Button>
  </CardActions>
  </div>
</div>
</Card>))}
        
      </div>
    
  );
}

export default ProductDetails;