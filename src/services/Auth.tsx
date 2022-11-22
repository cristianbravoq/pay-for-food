import axios from "axios";

import { Response, User } from '../common/files'

const BASE_URL = 'https://apipayforfood.e-city.co/Login/Login';
//{ usuario: 'Ecity.Software', contraseña: 'Pay4Food2022/*/' }

export async function authUser(usuario: User) {
    try {
        // 👇️ const data: CreateUserResponse
        const { data } = await axios.post<Response>(
            BASE_URL,
            usuario,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );
        //console.log(JSON.stringify(data.message, null, 4));
        return data.message;
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