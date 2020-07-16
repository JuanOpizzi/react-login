import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';

//? (1) Uso AppFrame para hacer mas estandar la parte visual

class CustomersContainer extends Component {

  componentDidMount() {
    this.props.fetchCustomers();
  }


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
          body={this.renderBody(this.props.customers)}>
        </AppFrame>
      </div>
    );
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
};

//* Lo defino como una propiedad por defecto
CustomersContainer.defaultProps = {
  customers: []
}

//* Ejecuto la funcion mapeada fetchCustomers y uso mi dispatch para ejecutar
//* mi action creator
const mapDispatchToProps = { fetchCustomers };

const mapStateToProps = state => ({
  customers: state.customers
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer));