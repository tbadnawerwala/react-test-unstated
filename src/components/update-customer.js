import { useEffect, useState } from "react";
import { updateCustomer, deleteCustomer } from "../un-stated/reducerOne";
import { Counter } from "../un-stated";
import styles from "./styles";

const UpdateCustomer = ({ id, customerName, closeUpdation }) => {
  const [newCustomerName, changeCustomerName] = useState(customerName);

  const { state, dispatch } = Counter.useContainer();

  useEffect(() => {
    changeCustomerName(customerName);
  }, [customerName]);

  const updateCustomerDetail = () => {
    dispatch(updateCustomer({ id, newCustomerName, closeUpdation }));
    closeUpdation();
  };

  const deleteCustomerDetail = () => {
    dispatch(deleteCustomer({ id }));
    closeUpdation();
  };

  const handleChange = (e) => {
    changeCustomerName(() => e.target.value);
  };

  return (
    <div className="update-customer-container">
      <h1>Name</h1>
      <input
        value={newCustomerName}
        onChange={handleChange}
        className="input"
        type="text"
        autoComplete="off"
      />
      <div>
        <button
          style={{ width: styles.width, backgroundColor: styles.success }}
          className={"button left"}
          onClick={() => updateCustomerDetail()}
        >
          Save
        </button>
        <button
          style={{
            width: styles.width,
            backgroundColor: styles.warn.backgroundColor,
          }}
          className={"button left"}
          onClick={() => deleteCustomerDetail()}
        >
          Delete
        </button>
        <button
          style={{
            width: styles.width,
            backgroundColor: styles.warn.backgroundColor,
          }}
          className={"button left"}
          onClick={closeUpdation}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UpdateCustomer;
