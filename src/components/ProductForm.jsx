import styles from "./ProductForm.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MyNavbar from "./MyNavbar";
import { useState } from "react";
const ProductForm = ({ postProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    const newProduct = {
      name: name,
      image: url,
      price: price,
      amount: amount,
    };
    postProduct(newProduct);
  };
  return (
    <div className={styles.container}>
      <MyNavbar />
      <section className={styles.productForm}>
        <div className={styles.formContainer}>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="text-white">Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter product name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white">Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="0"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white">Product Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="0"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </Form.Group>

            <Form.Label className="text-white" htmlFor="basic-url">
              Product Image
            </Form.Label>
            <InputGroup className="mb-4">
              <InputGroup.Text id="basic-addon3">
                https://example.com/
              </InputGroup.Text>
              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
            </InputGroup>
          </Form>
          <button type="submit" onClick={handleSubmit}>
            Save To New Product
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductForm;
