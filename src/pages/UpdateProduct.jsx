import styles from "./UpdateProduct.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MyNavbar from "../components/MyNavbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const UpdateProduct = () => {
  const { state: product } = useLocation();

  const [updatedProduct, setUpdatedProduct] = useState(product);

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
                required
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white">Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="0"
                required
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white">Product Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="0"
                required
                value={updatedProduct.amount}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    amount: e.target.value,
                  })
                }
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
                required
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    image: e.target.value,
                  })
                }
              />
            </InputGroup>
          </Form>
          <button type="submit">Save To New Product</button>
        </div>
      </section>
    </div>
  );
};

export default UpdateProduct;
