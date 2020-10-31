import React , {Component} from 'react';

class Login extends Component{

    
    constructor()
    {

        super();
         this.state={

            email:'',
            password:'',
         }

    }
    handleFormSubmit()
{

    localStorage.setItem('token', "Meghraj");
   console.log(localStorage);
    return;

}

    render()
    {
        return(
            <form className="login-form">
        <span className="login-signup-header">Log In</span>
         
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            // ref={this.emailInputRef}
            
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            // ref={this.passwordInputRef}
            
          />
        </div>
        <div className="field">
           
            <button onClick={this.handleFormSubmit} >
              Log In
            </button>
       
        </div>
      </form>
        )
    }
     
    
}


 


export default Login;