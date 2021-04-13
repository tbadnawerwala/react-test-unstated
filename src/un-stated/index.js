import React, { useState,useReducer } from "react"
import { createContainer } from "unstated-next"
import {reducerCombined , initialStateCombined} from './combine-reducer'

  function useCounter(){
    const [state, dispatch] = useReducer(reducerCombined, initialStateCombined);
    return {state, dispatch}
  }
  



export const Counter  = createContainer(useCounter);


