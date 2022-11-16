import axios from "axios";

import { Response } from '../common/files'

const BASE_URL = 'https://apipayforfood.e-city.co/Order/CreateOrder';

export async function CreateOrder() {
    try {
        // 👇️ const data: CreateUserResponse
        const { data } = await axios.post<Response>(
            BASE_URL,
            {
                productos: [
                  {
                    iD_RESTAURANTE: 1,
                    nombrE_RESTAURANTE: '',
                    direccion: '',
                    horA_APERTURA: 1,
                    horA_CIERRE: 1,
                    restaurantE_DISPONIBLE: true,
                    iD_PRODUCTO: 1,
                    nombrE_PRODUCTO: '',
                    imagen: '',
                    descripcion: '',
                    precio: 1,
                    stock: 1,
                    cantidad: 1,
                    disponible: true,
                    categorias: [
                      {
                        iD_CATEGORIA: 1,
                        iD_PRODUCTO: 1,
                        nombre: '',
                        disponible: true,
                        obligatoria: true,
                        cantidad: 1,
                        recetas: [
                          {
                            iD_RECETA: 1,
                            iD_CATEGORIA: 1,
                            iteM_RECETA: '',
                            valor: 1,
                            seleccionable: true,
                            removible: true,
                            cantidaD_DISPONIBLE: 1,
                            cantidad: 1,
                            disponible: true,
                          }
                        ]
                      }
                    ]
                  }
                ],
                totaL_VENTA: 1,
                nombrE_CLIENTE: '',
                comentario: '',
                iD_RESTAURANTE: 1,
              },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );
        console.log(JSON.stringify(data, null, 4));
        //return data;
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