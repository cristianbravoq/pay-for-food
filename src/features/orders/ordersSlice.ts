import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  _resOrdersByRestaurant,
  _resOrdersByRestaurant_productos,
  _resOrdersByRestaurant_categorias,
  _resOrdersByRestaurant_recetas,
} from "../../common/files";

interface ordersState {
  Orders: _resOrdersByRestaurant;
}

interface ordersState_productos {
  Orders_productos: _resOrdersByRestaurant_productos;
}

interface ordersState_categorias {
  Orders_categorias: _resOrdersByRestaurant_categorias;
}

interface ordersState_recetas {
  Orders_recetas: _resOrdersByRestaurant_recetas;
}

const stateRecetas: ordersState_recetas = {
  Orders_recetas: {
    iteM_RECETA: "",
    valor: 0,
    cantidad: 0,
  },
};

const stateCategorias: ordersState_categorias = {
  Orders_categorias: {
    categoria: "",
    iD_CATEGORIA_PRODUCTO_PEDIDO: 0,
    recetas: stateRecetas.Orders_recetas,
  },
};

const stateProductos: ordersState_productos = {
  Orders_productos: {
    cantidad: 0,
    descripcion: "",
    nombrE_PRODUCTO: "",
    iD_PRODUCTOS_PEDIDO: 0,
    imagen: "",
    estado: "",
    categorias: stateCategorias.Orders_categorias,
  },
};

const initialState: ordersState = {
  Orders: {
    numerO_PEDIDO: "",
    nombrE_CLIENTE: "",
    valor: 0,
    comentario: "",
    iD_ESTADO_PEDIDO: 0,
    estado: "",
    productos: stateProductos.Orders_productos,
  },
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    orderByRestaurantSlice: (state, action: PayloadAction<_resOrdersByRestaurant>) => {
      state.Orders = action.payload
    },
  },
});

export const { orderByRestaurantSlice } = ordersSlice.actions;
export default ordersSlice.reducer;