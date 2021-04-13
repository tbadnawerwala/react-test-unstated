import {
    fetchCustomerListSuccess,
    fetchCustomerListAddSuccess,
    updateCustomerList
  } from './customerReducer';
import Customer from '../services/customer';
import { v4 as uuidv4 } from 'uuid';


export const initialState = {
    isLoading: null,
    error: null,
    customerList: [],
  }

export const customerData = () => ({type: 'CUSTOMER_LIST'});
export const saveCustomer1 = (data) => ({type: 'SAVE_CUSTOMER', payload: data});
export const updateCustomer = (data) => ({type: 'UPDATE_CUSTOMER', payload:data});
export const deleteCustomer = (data) => ({type: 'DELETE_CUSTOMER', payload: data})

export const reducerOne = (state,action)=> {
  
    try {
      switch (action.type) {
        case 'CUSTOMER_LIST': {
          const data = Customer.getCustomerList();
         return  fetchCustomerListSuccess({customerData: data})
          break;
        }
        case 'SAVE_CUSTOMER': {
 
          if (!(action.payload && action.payload.customerGroup && action.payload.customerGroup.trim())) {
            alert('Customer group should not be empty!');
            return {...state};
          }
          
          if (!(action.payload && action.payload.customerName && action.payload.customerName.trim())) {
            alert('Customer name should not be empty!');
            return {...state};
          }
            let {customerList} = state;
            const clonedCustomerList = JSON.parse(JSON.stringify(customerList));
            const data =  {
              model: "accounts_receivable.cusgrp",
              pk: uuidv4(),
              fields: {
                customer_group: action.payload.customerGroup,
                csgrp_name: action.payload.customerName
              }
            }
            clonedCustomerList.push(data)
           
             return fetchCustomerListAddSuccess({customerList: clonedCustomerList});
          break;
        }
        case 'UPDATE_CUSTOMER': {
            const {id, newCustomerName} = action.payload;
          if (!(newCustomerName && newCustomerName.trim())) {
            alert('Customer name should not be empty!');
            return {...state};
          }
          let {customerList} = state;
          const clonedCustomerList = JSON.parse(JSON.stringify(customerList));
          const index = clonedCustomerList.findIndex((customer) => customer.pk === id);
          clonedCustomerList[index].fields.csgrp_name = newCustomerName;
         return updateCustomerList({ customerList: clonedCustomerList })
          break;
        }
        case 'DELETE_CUSTOMER': {
          const {id} = action.payload;
          const {customerList} = state;
          const clonedCustomerList = JSON.parse(JSON.stringify(customerList));
          const updatedCustomerList = clonedCustomerList.filter((customer) => customer.pk !== id);
         return updateCustomerList({ customerList: updatedCustomerList });
          break;
        }
        default:
          return {
            ...state
          }
          break
      }
    } catch (e) {
      console.error(`Error occuring while calling an action ${action.type}`, e);
    }
  }