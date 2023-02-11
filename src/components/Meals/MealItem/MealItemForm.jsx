import { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);

  const amountImputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const imputAmount = amountImputRef.current.value;
    if (
      imputAmount.trim().length === 0 ||
      +imputAmount < 1 ||
      +imputAmount > 5
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(+imputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountImputRef}
        label="Кількість"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Введіть коректне значення (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
