import MyNavbar from "../components/MyNavbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <MyNavbar />
      <section className={styles.home}>
        <h1>Welcome Our Product Management System</h1>
        <div className={styles.buttons}>
          <button>Add New Product</button>
          <button>Product List</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
