import { handleActions } from 'redux-actions'; //! (1)
import { FETCH_CUSTOMERS } from '../constants';

//? (1) handleActions es una utilidad que me permite manejar las acciones,
//?     me da redeux-actions para manejar los reducers.

//* HandleActions recibe un objeto (como primero parametro) con las distintas
//* constantes como claves de un diccionario, y una funcion asociada a esa clave,
//* entonces tenes por cada accion, una funcion a ejecutar.
//* El segundo parametro es un valor por defecto, que va a ser el valor por defecto
//* del state (que en este caso deberia ser el array de customers)
export const customers = handleActions({
  [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload],
}, []);
