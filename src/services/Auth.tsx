import axios from "axios";

import { User } from '../common/files'

import { Response } from '../common/files'

const BASE_URL = 'http://localhost:10144/Login/Login';
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
        console.log(JSON.stringify(data.message, null, 4));
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