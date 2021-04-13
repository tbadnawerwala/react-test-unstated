export const initialState = {
    isLoading: null,
    error: null,
    customer:{
        customerName: '',
        customerGroup: ''
    }
  }

  export const addCustomerAction = (data) => ({type: 'Add_customer' , payload: data});
  export const reset = () => ({type: 'RESET'});

  export const reducerTwo = (state,action)=>{
    switch(action.type){
        case 'Add_customer':
            return {
              ...initialState,
              isLoading: true,
              customer: action.payload  
            }
            break;

        case 'RESET':
          
          return {
            ...initialState
          }
          break;

          default:
            return state;
      }
}
