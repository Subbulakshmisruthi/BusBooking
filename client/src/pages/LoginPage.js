import {useContext, useState} from "react";

export default function LoginPage(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    async function login(ev) {
        console.log("login handler");
      }
    
    return(
        <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input type="text"
               placeholder="username"
               value={username}
               onChange={ev => setUsername(ev.target.value)}/>
        <input type="password"
               placeholder="password"
               value={password}
               onChange={ev => setPassword(ev.target.value)}/>
        <button>Login</button>
      </form>
    )
}