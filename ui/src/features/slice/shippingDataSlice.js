import { createSlice } from "@reduxjs/toolkit";

const shippingDataSlice = createSlice({
    name:'cartDetails',
    initialState: {
        totalNoOfProduct: '',
    },
    reducers: {
        setShippingCartData: (state, action) => {
            const {totalNoOfProduct} = action.payload;
            state.totalNoOfProduct = totalNoOfProduct;
        },
    },
});

export const { setShippingCartData } = shippingDataSlice.actions;
export default shippingDataSlice.reducer;
