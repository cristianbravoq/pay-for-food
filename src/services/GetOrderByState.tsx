import axios from "axios";

import { Response } from '../common/files'

const BASE_URL = 'https://apipayforfood.e-city.co/Order/GetOrdersByState';

export async function GetOrderByState(id_State: number) {
    try {
        // 👇️ const data: CreateUserResponse
        const { data } = await axios.post<Response>(
            BASE_URL,
            {
                id_Restaurante: 1,
                id_State: id_State
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );
        //console.log(JSON.stringify(data.data, null, 4));
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            // 👇️ error: AxiosError<any, any>
            //return error.message;
        } else {
            console.log('unexpected error: ', error);
            //return 'An unexpected error occurred';
        }
    }
}