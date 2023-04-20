import React, { useState } from "react";

export default function show(props){

    const [username, setUsername] = useState('0');
    const [password, setPassword] = useState('');

    
    return (
        <div>
           <h1 value = "this.state.username"
           onChange={this.setUsername}>{this.props.name}</h1> 
           <h1 value = "this.state.password"
           onChange={this.setPassword}>{this.props.password}</h1> 
        </div>
    );
    


}