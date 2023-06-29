import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            let find=state.items.findIndex((item)=>item.id===action.payload.id)
            if(find>=0){
                state.items[find].quantity+=1;
            }else{
                state.items.push(action.payload);
            }
        },
        removeitems:(state,action)=>{
            state.items.pop(action)
        },
        clearcart:(state)=>{
            state.items=[]
        }
    }
})
export const {addItems,removeitems,clearcart}=cartSlice.actions;
export default cartSlice.reducer;