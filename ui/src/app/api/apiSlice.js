import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery ({
    baseUrl : 'https://tinytags-api.onrender.com',
    // baseUrl:'https://tinytags.in',
    prepareHeaders: (headers, {getState}) => {
        // headers.set('Content-Type','application/json');
        // headers.set('Content-Type', 'multipart/form-data');
        return headers;
    }
});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({}),
    onError: (error) => {
        console.error('An error occured:', error);
    },
});