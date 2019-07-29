import React, { Component } from 'react';
import Items from './items'
import Checkout from './checkout'

import { BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom' 



class App extends Component {

  constructor(props){
    super(props);
    this.state={}
  }



  render() {
    return (
      <div className="container">
       <h1 className="text-center">Donate</h1>
          <Router>
            <div>
            {/* <ul style={divStyles} >
              <li><Link to="/" className="text-primary">Home</Link></li>
              <li><Link to="/About" className="text-warning">About Us</Link></li>
              <li><Link to="/Service" className="text-white">Services</Link></li>
              <li><Link to="/ContactUs" className="text-danger">Contact Us</Link></li>
            </ul> */}
            <Switch>
              <Route exact path='/' component={Items}/>
              <Route path='/Checkout' component={Checkout}/>
             {/*  <Route path='/Service' component={Services}/>
              <Route path='/ContactUs' component={Contact}/> */}
         </Switch>
         </div>
           </Router>
      
      </div>
    );
  }
}

export default App;