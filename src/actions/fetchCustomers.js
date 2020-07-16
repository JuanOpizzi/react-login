import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiGet } from '../api';
import { urlCustomers } from '../api/urls';

//* El segundo parametro recibe un payload creator, tenemos que pasarle como parametros
//* los parametros que le estemos pasando al action creator `fetchCustomers`, pero en
//* caso lo invocamos sin ningun parametro (esto se hace en el componentDidMount de
//* CustomersContainer.js), y luego va a retornar el payload creator, el array de customers
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers));