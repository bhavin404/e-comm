import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import BasicPagination from '../BasicPagination/BasicPagination';
import {Link} from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
    
    container:{
        height:'100vh',
        width:'95vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
    },
  root: {
    maxWidth: 345,
    margin:'20px 20px',
    border:'1px solid black'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


const Products = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)

  //state logics are here
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }, [])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onPaginate = (pageNumber) => {
      setCurrentPage(pageNumber)

  }

  //Get Current posts
  const indexOfLastPost = currentPage * postsPerPage  // 1 x 8
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = products.slice(indexOfFirstPost , indexOfLastPost);

  return (
      <> 

      <div className={classes.container}>
          {currentPosts.filter((product) => {

                if(props.searchedValue ==' '){
                    return product
                }
                else if (product.category.toLowerCase().includes(props.searchedValue)){
                    return product
                }

          }).map((product,index) =>   
          <Link to={`/ProductDetails/${product.category}/${product.id}`} >
          <Card key={product.id} className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    subheader={product.category}
                />

                <CardMedia
                    className={classes.media}
                    image={product.image}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                
                </Card>
                </Link>
                    
            )}
                            <BasicPagination paginate={onPaginate}postsPerPage={postsPerPage} totalPosts={products.length} />

    </div>

    </>
    
  );
}

export default Products;