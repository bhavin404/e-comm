import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Products from '../componentss/products/Products'

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        width: '200px',
        backgroundColor:'white',

      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      input:{

      },
  },
}));



const MainPage = () => {

    
  const classes = useStyles();

  //dropdown
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

   //logics for Search 
  const [searchTerm, setSearchTerm] = useState('')

  const onSearch =(e) => {
    setSearchTerm(e.target.value)
    }

    console.log(searchTerm);


  return (
      <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>

          <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel  id="demo-simple-select-outlined-label">Age</InputLabel>
                <Select
                className={classes.input}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={onSearch}
                label="Age"
                >
                <MenuItem value=" "><em>None</em></MenuItem>
                <MenuItem value="men clothing">Men Clothing</MenuItem>
                <MenuItem value="jewelery">Jewelery</MenuItem>
                <MenuItem value="women clothing">Women Clothing</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                </Select>
            </FormControl>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onSearch}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
    <Products searchedValue={searchTerm} />
    </>
  );
}

export default MainPage;