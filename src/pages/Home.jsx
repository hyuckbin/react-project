import { useNavigate } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <MyNavbar />
      <section className={styles.home}>
        <h1>Welcome Our Product Management System</h1>
        <div className={styles.buttons}>
          <button onClick={() => navigate("/newproduct")}>
            Add New Product
          </button>
          <button onClick={() => navigate("/productlist")}>Product List</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
