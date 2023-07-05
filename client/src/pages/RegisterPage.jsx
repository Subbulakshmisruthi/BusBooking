import Nav from "../Nav";
import {useState} from "react";

export default function RegisterPage(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    async function RegisterUser(event){
        event.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({username,email,password1,password2}),
        headers: {'Content-Type':'application/json'},
        mode:'cors',
        });
        if (response.status === 200) {
            alert('Registration successful');
            window.location = "/login"
          } else {
            alert('Registration failed');
          }
    }
    return(
        <>
            <Nav/>
            <div className="loginform">
                <p className="text-center">Create a User</p>
                <form method="post" onSubmit={RegisterUser}>
                    <input type="text" className="inputs" placeholder="Username"  value={username}
             onChange={ev => setUsername(ev.target.value)}/>
                    <input type="email" className="inputs" placeholder="email"  value={email}
             onChange={ev => setEmail(ev.target.value)}/>
                    <input type="password" className="inputs"  placeholder="Password"  value={password1}
             onChange={ev => setPassword1(ev.target.value)}/>
                    <input type="password"  className="inputs" placeholder="Confirm password"  value={password2}
             onChange={ev => setPassword2(ev.target.value)}/>
                    <input type="submit" value={"Register"} className="auth-btn"/>
                </form>
            </div>
        </>
        
    )
}