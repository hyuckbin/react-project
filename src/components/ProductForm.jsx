import styles from "./ProductForm.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MyNavbar from "./MyNavbar";
const ProductForm = () => {
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
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white">Product Price</Form.Label>
              <Form.Control type="number" placeholder="0" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white">Product Quantity</Form.Label>
              <Form.Control type="number" placeholder="0" />
            </Form.Group>

            <Form.Label className="text-white" htmlFor="basic-url">
              Product Image
            </Form.Label>
            <InputGroup className="mb-4">
              <InputGroup.Text id="basic-addon3">
                https://example.com/
              </InputGroup.Text>
              <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
          </Form>
          <button type="submit">Save To New Product</button>
        </div>
      </section>
    </div>
  );
};

export default ProductForm;
