import { createContext } from "react";

const OrdersContext = createContext({
  numerO_PEDIDO: "",
  nombrE_CLIENTE: "",
  /* valor: 0,
  comentario: "",
  iD_ESTADO_PEDIDO: 0,
  estado: "",
  productos: {
    cantidad: 0,
    descripcion: "",
    nombrE_PRODUCTO: "",
    iD_PRODUCTOS_PEDIDO: 0,
    imagen: "",
    estado: "",
    categorias: {
      categoria: "",
      iD_CATEGORIA_PRODUCTO_PEDIDO: 0,
      recetas: {
        iteM_RECETA: "",
        valor: 0,
        cantidad: 0,
      },
    },
  }, */
});

export default OrdersContext
