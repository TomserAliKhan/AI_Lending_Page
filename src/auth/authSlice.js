import { createSlice } from "@reduxjs/toolkit";


export const authSlice=createSlice({
    name:"auth",
    initialState:{
        accessToken:'',
        isLoggedIn:true,
        value:0,
        user:[
          {name:'rahul khan',
            isTwoFactor:true,
           email:"rahul00@GiMailShirt.com",
            avtar:"/user-1.png",
            activePlan:{
                plan:"Plus",
                package:"Plus plan-Annuually",
                amount:'$240',
                purchasedOn:'15 jan 2027',
                status:'Active'
            }
        }
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