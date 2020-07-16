import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const url = 'http://localhost:3005/customers';

//* Obtengo el JSON del server levantado con JSON-server
//* Esta funcion devuelve una promise, entonces cuando el middlware redux-promises
//* detecta que lo que estamos pasando en nuestro payload es una promise, ejecuta
//* la promise, y cuando obtiene el resultado, genera una accion que se termina de
//* resolver y la toma el reducer.
//* Es decir: detiene la accion hasta obtener el resultado del servidor y con el resultado
//* continua e invoca al reducer en handleActions
const apiFetchCustomers = () => fetch(url).then(v => v.json());

//* El segundo parametro recibe un payload creator, tenemos que pasarle como parametros
//* los parametros que le estemos pasando al action creator `fetchCustomers`, pero en
//* caso lo invocamos sin ningun parametro (esto se hace en el componentDidMount de
//* CustomersContainer.js), y luego va a retornar el payload creator, el array de customers
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiFetchCustomers);