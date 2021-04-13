import { Counter } from "../un-stated";
import { addCustomerAction } from "../un-stated/reducerTwo";

const NewCustomerInput = () => {
  const { state, dispatch } = Counter.useContainer();

  const { customer } = state.reducerTwo;

  const handleChange = (e) => {
    dispatch(
      addCustomerAction({
        ...customer,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <tr>
      <td></td>
      <td>
        <input
          value={customer.customerGroup}
          onChange={handleChange}
          autocomplete="off"
          className="input-field"
          name="customerGroup"
          type="text"
        />
      </td>
      <td>
        <input
          className="input-field"
          value={customer.customerName}
          onChange={handleChange}
          autocomplete="off"
          name="customerName"
          type="text"
        />
      </td>
    </tr>
  );
};

export default NewCustomerInput;
