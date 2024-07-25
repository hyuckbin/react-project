import styles from "./ProductCard.module.css";
import React, { useReducer } from "react";

const ProductCard = ({
  product,
  putProduct,
  updatedProduct,
  deleteProduct,
}) => {
  const { name, price, amount, id } = product;

  const initialState = {
    amount: amount || 1,
    price: price,
    totalPrice: price * (amount || 1),
  };

  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return {
          ...state,
          amount: state.amount + 1,
          totalPrice: (state.amount + 1) * state.price,
        };
      case "dec":
        return state.amount > 1
          ? {
              ...state,
              amount: state.amount - 1,
              totalPrice: (state.amount - 1) * state.price,
            }
          : state;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const inc = () => {
    dispatch({ type: "inc" });
  };

  const dec = () => {
    dispatch({ type: "dec" });
  };

  /*
  useEffect(() => {
    const updatedProduct = {
      ...product,
      amount: state.amount,
    };
    debouncedPutProduct(updatedProduct);
  }, [state.amount, product, debouncedPutProduct]);
*/
  return (
    <div className={styles.cardContainer}>
      <img
        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSQu1Hj6vUPhMPvHbjdiVnO9vbh6moWytSkaaqN0AkTDiHinFRIgzq1xv8M9UccJqPWEetr9qSN0rv1hnbE2H7dmWGZJhGRilBmd6Z7uG_jhH_jWZr9uepA1Q"
        alt="productImage"
      />
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <p className={styles.price}>{price}</p>
        <div className={styles.buttons}>
          <button onClick={dec}>-</button>
          <p>{state.amount}</p>
          <button onClick={inc}>+</button>
        </div>
        <button className={styles.remove} onClick={() => deleteProduct(id)}>
          REMOVE
        </button>
        <p className={styles.total}>Product Total: {state.totalPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
