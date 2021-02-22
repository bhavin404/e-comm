import React from 'react'
import Navbar from './componentss/Nav/Navbar';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import ProductDetails from './componentss/Productsdetails/ProductDetails';
import MainPage from './componentss/Mainpage';
import ParticularProductDetails from './componentss/ParticularProductDetails/ParticularProductDetails';


function App() {
  return (

    <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />  
          <Route path="/ProductDetails/:categories/:id" component={ProductDetails} />
       </Switch>
       {/* <ParticularProductDetails/> */}
   </Router>
 
 );
}

export default App;
