import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface Product {
    id: number,
    name: string,
    price: number,
    counter: number,
    image: string
}

interface InitialState {
    cart: Product[],
    quantity: number
}

const initialState: InitialState = {
    cart: [],
    quantity: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        reset: () => initialState,

        addItemCart(state, action: PayloadAction<Product>) {
            const foundItem = state.cart.find(({ id }) => id === action.payload.id);
            const cartItems = state.cart.reduce((accum, { counter }) => accum + counter, 0);

            foundItem ?
                foundItem.counter += action.payload.counter :
                state.cart = [...state.cart, action.payload];

            state.quantity = cartItems + action.payload.counter;
        },

        deleteItemCart(state, action: PayloadAction<number>) {
            const foundItem = state.cart.find(({ id }) => id === action.payload);
            if (foundItem) {
                state.quantity -= foundItem.counter;
            }

            state.cart = state.cart.filter(({ id }) => id != action.payload);
        }
    },

})

export const selectQuantity = (state: RootState) => state.cartReducer.quantity;
export const selectCart = (state: RootState) => state.cartReducer.cart;

export const { reset, addItemCart, deleteItemCart } = cartSlice.actions;
export default cartSlice.reducer