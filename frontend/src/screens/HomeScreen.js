import "./HomeScreen.css";

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <h2 className="homescreen_title">Latests products</h2>

            <div className="homescreen_products">
                <Product />
            </div>
        </div>

    )
}

export default HomeScreen
