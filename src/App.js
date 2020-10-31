import logo from './logo.svg';
import './App.css';
import {About} from './component/About';
import Contact from './component/Contact';
import {BrowserRouter as Router,Switch, Link, Route} from 'react-router-dom';

import Login from './component/login';


function App() {
  
  const token=localStorage.getItem('token');
  
  console.log(token);
  

  return (
    
    <Router>

     
    <div className="App">
   
      App

   <ul>
     <li>   <Link to="/">Home</Link> </li>
     <li>   <Link to="/about">About</Link> </li>
     <li>   <Link to="/contact">Contact</Link> </li>
     

   </ul>
    
    </div>

    <Switch>
    
    
     
    <Route   path='/about' component={About}></Route> 

    <Route   path='/contact'><Contact/></Route>

    
  </Switch> 

   

      <Login/>
    </Router>
    

    
  );
}

export default App;
