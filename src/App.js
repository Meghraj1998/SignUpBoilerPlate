import logo from './logo.svg';
import './App.css';
import {About} from './component/About';
import Contact from './component/Contact';
import {BrowserRouter as Router,Switch, Link, Route} from 'react-router-dom';
 import {useContext} from 'react';
import Login from './component/login';
import Context from './index';

function App(props) {

  const store= useContext(Context);

  const token=localStorage.getItem('token');
  
  console.log(token);
 
   
 // console.log("store",props.store.getState());
      console.log("into app component, its MAIN component!");
   
   

       return(

       // <Context.Consumer>
        ///{(store)=>{

         // return(

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



<Login  store={store}/>
</Router>
          
          )

       // }}
        //</Context.Consumer>
       

      //) 

        }


    

export default App;
