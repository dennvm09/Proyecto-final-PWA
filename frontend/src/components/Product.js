import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" />
            <div className="product_info">
                <p className="info_name">Producto 1</p>
                <p className="info_description">
                    Lorem impsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum omnis ipsum commodi nesciunt.
                </p>
                <p className="info_price">$15.000</p>

                <Link to={`/product/${1111}`}className="info_button">View</Link>
            </div>
        </div>
    )
}

export default Product