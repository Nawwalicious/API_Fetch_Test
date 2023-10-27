import './Header.scss'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
function Header({ isAuthenticated }) {

    function toLoginPage()
    {
        return Link
    }

    return (
        // Old Code
        // <div className="root">
        //     <div className="navbar">
        //         <div className="nav-element-1">
        //             <span>Nawwal</span>
        //         </div>
        //         <div className="nav-element-2">
        //             <ul>
        //                 <li><Link to="/">Home</Link></li>
        //                 <li><Link to="/Products">Products</Link></li>
        //                 <li><Link to="/AboutUs">About Us</Link></li>
        //                 <li><Link to="/YourDetails">Your Details</Link></li>
        //             </ul>
        //         </div>
        //         <div className="nav-element-3">
        //             <button><Link to="/Login">Login</Link></button>
        //         </div>
        //     </div>
        // </div>
        <div className="root">
            <div className="navbar">
                <div className="nav-element-1">
                    <span>Nawwal</span>
                </div>
                <div className="nav-element-2">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    {isAuthenticated && <li><Link to="/Products">Products</Link></li>}
                    <li><Link to="/AboutUs">About Us</Link></li>
                    {isAuthenticated && <li><Link to="/YourDetails">Your Details</Link></li>}
                    {isAuthenticated && <li><Link to="/Weather">Weather</Link></li>}
                    </ul>
                </div>
                <div className="nav-element-3">
                    {
                        isAuthenticated ? (<Link to="/">Logout</Link>) : (<Link to="/Login">Login</Link>)
                    }
                </div>
            </div>
        </div>
     );
}

export default Header;