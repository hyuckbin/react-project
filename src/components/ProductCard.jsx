import MyNavbar from "./MyNavbar";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { name, image, price, amount } = product;
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt="productImage" />
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <p>{price}</p>
        <div className={styles.buttons}>
          <button>+</button>
          <p>{amount}</p>
          <button>-</button>
        </div>
        <button className={styles.remove}>REMOVE</button>
        <p>Product Total: 0</p>
      </div>
    </div>
  );
};

export default ProductCard;
