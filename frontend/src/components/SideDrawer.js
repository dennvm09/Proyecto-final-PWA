import "./SideDrawer.css";
import {Link} from 'react-router-dom';

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"];
    if(show) {
        sideDrawerClass.push("show");
    }
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer_links" onClick={click}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="sidedrawer_cartbadge">0</span>
                        </span>
                    </Link>
                    <Link to="/">Shop</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer
