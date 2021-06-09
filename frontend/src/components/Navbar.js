import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar_logo">
                <h2>Pao&Denn Store</h2>
            </div>
            {/* links */}
            <ul className="navbar_links">
                <li>
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo_badge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        {/* Icon */}
                        Shop
                    </Link>
                </li>
            </ul>
            {/* hamburguer menu */}
            <div className="hamburger_menu">
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}

export default Navbar
