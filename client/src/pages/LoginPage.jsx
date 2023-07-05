import Nav from "../Nav";
import {useState} from "react";

export default function LoginPage(){
    async function LoginUser(event){
        event.preventDefault();
        const response = await fetch("http://localhost:4000/login",{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
            mode:'cors',
        })
        console.log(response)
        if(response.status==200){
            alert("Logged In");
        }
        else{
            alert("Check Username and password");
        }
    }
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    return(
        <>
            <Nav/>
            <div className="loginform">
                <p className="text-center">Sign In</p>
                <form method="post" onSubmit={LoginUser}>
                    <input type="text" className="inputs" placeholder="Username" value={username} onChange={(ev)=>{
                        setUsername(ev.target.value);
                    }}/>
                    <input type="password" className="inputs" placeholder="Password" value={password} onChange={(ev)=>{
                        setPassword(ev.target.value);
                    }} />
                    <input type="submit" value={"Login"} className="auth-btn"/>
                </form>
            </div>
        </>
    )
}