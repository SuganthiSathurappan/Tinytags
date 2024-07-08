import { apiSlice } from "../../app/api/apiSlice";

export const cartDataApiSlice = apiSlice.injectEndpoints({
    tagTypes: ['cart','cart_quantity','deleteCart'],
    endpoints: (builder) => ({
        cartData: builder.mutation({
            query: ({customer_id}) => ({
                url: '/customerCart',
                method: 'POST',
                body: {customer_id},
            }),
        }),
        cartQuantityUpdateData: builder.mutation({
            query: (transformedData) => ({
                url: '/updateCart',
                method: 'POST',
                body: transformedData,
            })
        }),
        deleteCartData : builder.mutation({
            query : ({cartId}) => ({
                url:'/deleteCart',
                method: 'DELETE',
                body : ({cartId}),
            })
        })
    }),
});

export const { useCartDataMutation, useCartQuantityUpdateDataMutation, useDeleteCartDataMutation } = cartDataApiSlice;