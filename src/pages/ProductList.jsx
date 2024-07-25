import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styles from "./ProductList.module.css";
import MyNavbar from "../components/MyNavbar";

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

  const putProduct = async (updatedProduct) => {
    await axios.put(`${url}/${updatedProduct.id}`, updatedProduct);
    getProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${url}/${id}`);
    getProducts();
  };

  return (
    <div className={styles.container}>
      <MyNavbar />
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            putProduct={putProduct}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
