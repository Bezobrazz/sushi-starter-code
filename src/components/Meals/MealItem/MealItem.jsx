import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const formatedPrice = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div className={styles.meal}>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formatedPrice}</div>
      </div>
      <div>{/* <button className={styles.button}>+</button> */}</div>
    </li>
  );
};

export default MealItem;
