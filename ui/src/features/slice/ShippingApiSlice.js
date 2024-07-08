import { apiSlice } from "../../app/api/apiSlice";

export const shippingDataApiSlice = apiSlice.injectEndpoints({
    tagTypes: ['shipping'],
    endpoints: (builder) => ({
        shippingData : builder.mutation({
            query: (data) => ({
                url: '/shippingAddress',
                method: 'POST',
                body:data,
            })
        }),
        cartQuantityData : builder.mutation({
            query: ({customer_id}) => ({
                url : '/cartDetails',
                method: 'POST',
                body : ({customer_id}),
            })
        })
    }),
});

export const { useShippingDataMutation, useCartQuantityDataMutation} = shippingDataApiSlice;