import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav>
            <div className="logo">
                <Link to="/">BookMyBus</Link>
            </div>
            <div className="auth">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    )
}