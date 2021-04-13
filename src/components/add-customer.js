import { Counter } from '../un-stated'
import { saveCustomer1} from '../un-stated/reducerOne';
import {reset} from '../un-stated/reducerTwo'
import styles from './styles'

const AddCustomer = ({ onNewCustomer, displayNewInput }) => {
  const {state, dispatch} = Counter.useContainer();
  const {customer} = state.reducerTwo;
  const saveCustomer =  () => {
     dispatch(saveCustomer1({customerName: customer.customerName, customerGroup: customer.customerGroup})
);

    dispatch(reset());
     
  };

  const cancel = () => {
   onNewCustomer();
  };


  return (
    <div className="add-button-container">
      {
        !displayNewInput &&
        <button className="button" onClick={onNewCustomer}>Add New</button>
      }
      {
        displayNewInput
        &&
        <>
          <button
            onClick={saveCustomer}
            className={'left'}
            style={styles.save}
            className="button">Save</button>
          <button
            onClick={cancel}
            className={'left'}
            style={styles.cancel}
            className="button">Cancel</button>
        </>
      }
    </div>
  )
}

export default AddCustomer;
