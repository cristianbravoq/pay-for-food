export interface User {
  usuario: string;
  contraseña: string;
}

export type Response = {
  codeError: number;
  message: string;
  data: object;
};

export interface UserLog {
  codeError: number;
  message: string;
  data: {
    nombre: string;
    iD_RESTAURANTE: number;
  };
}

export interface CreateOrder {
  productos: [
    {
      iD_RESTAURANTE: number;
      nombrE_RESTAURANTE: string;
      direccion: string;
      horA_APERTURA: number;
      horA_CIERRE: number;
      restaurantE_DISPONIBLE: boolean;
      iD_PRODUCTO: number;
      nombrE_PRODUCTO: string;
      imagen: string;
      descripcion: string;
      precio: number;
      stock: number;
      cantidad: number;
      disponible: boolean;
      categorias: [
        {
          iD_CATEGORIA: number;
          iD_PRODUCTO: number;
          nombre: string;
          disponible: boolean;
          obligatoria: boolean;
          cantidad: number;
          recetas: [
            {
              iD_RECETA: number;
              iD_CATEGORIA: number;
              iteM_RECETA: string;
              valor: number;
              seleccionable: boolean;
              removible: boolean;
              cantidaD_DISPONIBLE: number;
              cantidad: number;
              disponible: boolean;
            }
          ]
        }
      ]
    }
  ]
  totaL_VENTA: number;
  nombrE_CLIENTE: string;
  comentario: string;
  iD_RESTAURANTE: number;
}

export interface GetOrdersByNumber {
  numerO_PEDIDO: string;
}

export interface GetOrdersByRestaurant {
  id_Restaurante: number;
}

export interface ActualizarPedido {
  iD_ESTADO_PEDIDO: number;
  numerO_PEDIDO: string;
  clienT_ID: string;
}
