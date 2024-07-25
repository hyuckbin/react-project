import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const url = "https://66a2170f967c89168f1eb98b.mockapi.io/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(url);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ProductCard />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
