import { useEffect, useState } from "react";
import "./LoadMoreData.css";

function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts(() => [...products, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
  }, []);

  if (loading) {
    return <div className="loading">Loading ...</div>;
  }
  return (
    <div className="load-more-data">
      <h1>Load More Data</h1>
      <p>
        A seamless data loading feature that reveals more content on demand with
        a button click.
      </p>
      <div className="load-more-data-container">
        <div className="products-container">
          {products && products.length
            ? products.map((product) => (
                <div className="product" key={product.id}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                  />
                  <p className="product-title">{product.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className="button-container">
          <button
            disabled={disableButton}
            onClick={() => setCount((c) => c + 1)}
          >
            Load More Products
          </button>
          {disableButton && (
            <p className="button-message">You have reached to 100 products</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default LoadMoreData;
