import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";
import React, { useReducer, useEffect } from "react";

const ProductCard = ({ product, putProduct, deleteProduct }) => {
  const { name, price, amount, id, image } = product;

  const navigate = useNavigate();

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

  useEffect(() => {
    putProduct({ ...product, amount: state.amount });
  }, [state.amount]);

  return (
    <div className={styles.cardContainer}>
      <img
        onClick={() => navigate("/UpdateProduct", { state: product })}
        src={image}
        alt="productImage"
      />
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <p className={styles.price}>{price}</p>
        <div className={styles.amountContainer}>
          <button onClick={dec}>-</button>
          <p>{Number(state.amount)}</p>
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
