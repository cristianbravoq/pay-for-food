import axios from "axios";

import { Response } from "../common/files";

const BASE_URL = "http://localhost:8000";

export async function sendMsn(telefono: string, body: string) {
  var hoy = new Date();
  var hora = hoy.getHours();
  var minutos = hoy.getMinutes() + 1;
  if (hora === 23 && minutos === 59) hora = 0;
  if (minutos === 59) {
    hora += 1;
    minutos = 0;
  }
  console.log(hora, minutos, telefono, body);
  try {
    // 👇️ const data: CreateUserResponse
    const { data } = await axios.get<Response>(BASE_URL, {
      params: {
        telefono: `57${telefono}`,
        mensaje: body,
        hora: hora,
        minutos: minutos,
      },
    });
    console.log(JSON.stringify(data, null, 4));
    //return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      //return error.message;
    } else {
      console.log("unexpected error: ", error);
      //return 'An unexpected error occurred';
    }
  }
}
