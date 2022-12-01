import { createSlice } from "@reduxjs/toolkit";

const initial = {
    toppings: ['pepperoni']
}

export const pizzaSlice = createSlice({
    name:'pizza',
    initialState: initial,
    reducers: {
        removeTopping: (state, action) => {
            state.toppings = state.toppings.filter(topping => topping != action.payload)
        },
        addTopping: (state, action) => {
            state.toppings = [...state.toppings, action.payload]
        }
    }
})

// export const { removeTopping, addTopping } = pizzaSlice.actions;

 
