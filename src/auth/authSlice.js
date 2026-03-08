import { createSlice } from "@reduxjs/toolkit";


export const authSlice=createSlice({
    name:"auth",
    initialState:{
        accessToken:'',
        isLoggedIn:false,
        value:0,
        user:[
        //  {name:'rahul khan',
        //     email:"rahul00@GiMailShirt.com",
        //     avtar:"/user-1.png"
        //     }
        ]
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        setAccessToken:(state,action)=>{
            state.accessToken=action.payload
        },
        setIsLoggedIn:(state,action)=>{
            state.isLoggedIn=action.payload
        }
    }
})
export const{increment,setAccessToken,setIsLoggedIn}=authSlice.actions

export default authSlice.reducer