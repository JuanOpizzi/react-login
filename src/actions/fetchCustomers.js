import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers = [
  { "dni": "27000000",
    "name": "Juan Perez",
    "age": 37,
  },
  { "dni": "30000000",
    "name": "Otro",
    "age": 35,
  },
  { "dni": "33000000",
    "name": "Luis Martinez",
    "age": 32,
  },
];

//* El segundo parametro recibe un payload creator, tenemos que pasarle como parametros
//* los parametros que le estemos pasando al action creator `fetchCustomers`, pero en
//* caso lo invocamos sin ningun parametro (esto se hace en el componentDidMount de
//* CustomersContainer.js), y luego va a retornar el payload creator, el array de customers
export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);