import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getWeightDataById: builder.query<WeightData[], number>({
            query: (id) => ({
                url: `api/weight/data/${id}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useGetWeightDataByIdQuery
} = Api;