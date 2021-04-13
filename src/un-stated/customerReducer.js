import {initialState} from './reducerOne';

    export const fetchCustomerListStart= () => ({
      ...initialState,
      isLoading: true,
    })
   export const fetchCustomerListSuccess = (data) => ({
      ...initialState,
      customerList: data.customerData,
      isLoading: false,
    })


    export const fetchCustomerListAddSuccess = (data) => 
       
      ({...initialState,
      customerList: data.customerList
      })
     
    
      
    
    export const updateCustomerList= (data) => {
      return {
        ...initialState,
        customerList: data.customerList
      }
     }

