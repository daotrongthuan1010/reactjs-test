import React from 'react';
import "../style.css"

class Show extends React.Component{

  
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            password: ""
        };
      }
    changeUser = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    changePass = (event) => {
        this.setState({
            password: event.target.value
        })
    }

     submitForm(event) {
        event.preventDefault();
        console.log('form submit !!');
      }

    render(){
        return (
          <div className="container">
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={this.state.value}
                onChange={(event) => this.changeUser(event)}

    
               
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={(event) => this.changePass(event)}
           
              />
              <button type="submit" onChange={(event) => this.submitForm(event)}>Đăng nhập</button>
            </form>
            <div><p>Username : {this.state.name}</p>
            <p>Password : {this.state.password}</p></div>
            
          </div>          );

        };
        }

export default Show;