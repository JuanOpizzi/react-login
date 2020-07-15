import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

//? (1) Uso AppFrame para hacer mas estandar la parte visual

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

class CustomersContainer extends Component {

  handleAddNew = () => {
    this.props.history.push('/customers/new');
  }

  renderBody = customers => (
    <div>
      <CustomersList
        customers={customers}
        urlPath={'customers/'}>
      </CustomersList>
      <CustomersActions>
        <button onClick={this.handleAddNew}>Nuevo Cliente</button>
      </CustomersActions>
    </div>
  );

  //! (1)
  render() {
    return (
      <div>
        <AppFrame header={'Listado de clientes'}
          body={this.renderBody(customers)}>
        </AppFrame>
      </div>
    );
  }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);