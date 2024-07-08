import { apiSlice } from "../../app/api/apiSlice";

export const childFormApiSlice = apiSlice.injectEndpoints({
    tagTypes: ['Chilform'],
    endpoints: (builder) => ({
        childform: builder.mutation({
            query: (formData) => ({
                url: '/addToCartUploadPic',
                method: 'POST',
                body: formData,
            })
        })
    })
});

export const {
    useChildformMutation,
} = childFormApiSlice;