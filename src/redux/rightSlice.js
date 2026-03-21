import { createSlice } from "@reduxjs/toolkit";


export const rightSlice=createSlice({
    name:'rightHum',
    initialState:{
    isHumopen:false,
    content:'rightNav'
},
    reducers:{
        setHumOpen:(state)=>{state.isHumopen= !state.isHumopen},
        setContent:(state,action)=>{state.content=action.payload }
    }
    
})

export const {setHumOpen,setContent}=rightSlice.actions
export default rightSlice.reducer