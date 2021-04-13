import combineReducers from 'react-combine-reducers';
import {initialState as initialStateOne,reducerOne} from './reducerOne';
import {initialState as initialStateTwo, reducerTwo} from './reducerTwo';

 
export const [reducerCombined, initialStateCombined] = combineReducers({
  reducerOne: [reducerOne, initialStateOne],
  reducerTwo: [reducerTwo, initialStateTwo],
  // ...
});