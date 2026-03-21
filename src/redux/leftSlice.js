import { createSlice } from "@reduxjs/toolkit";


export const leftSlice=createSlice({
    name:'leftHum',
    initialState:{
    isHumopen:false,
    content:null
},
    reducers:{
        setHumOpen:(state)=>{state.isHumopen= !state.isHumopen},
        setContent:(state,action)=>{state.content=action.payload }
    }
    
})

export const {setHumOpen,setContent}=leftSlice.actions
export default leftSlice.reducer