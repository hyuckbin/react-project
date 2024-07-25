import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";

const NewProduct = () => {
  const url = "https://66a2170f967c89168f1eb98b.mockapi.io/products";

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(url);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const postProduct = async (newProduct) => {
    await axios.post(url, newProduct);
    getProducts();
  };

  return (
    <div>
      <ProductForm
        products={products}
        postProduct={postProduct}
        getProducts={getProducts}
      />
    </div>
  );
};

export default NewProduct;
