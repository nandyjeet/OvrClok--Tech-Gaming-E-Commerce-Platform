import React, {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                // FIX: added leading slash so this always hits the API root,
                // not a path relative to whatever page you're currently on
                const res =  await fetch('/api/products');
                const data = await res.json();
                setProducts(data.slice(0, 4)); // Display only the first 4 products
            } catch (error) {
                console.error('Error fetching products:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);


    return (
        <div className="home-container">
            <div className="hero-banner">
                <h1>Welcome to OvrClok</h1>
                <p>Your one-stop shop for all your Tech & Gaming needs!</p>
            </div>
            <h2>Featured Products</h2>
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className="product-grid">
                    {products.map((product) => (
                        // FIX: use _id instead of id for the key, same reasoning as ProductCard link
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;