import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';

// Container hecho para mostrar los datos de cliente

class CustomerContainer extends Component {
  render() {
    return (
      <div>
        <AppFrame header={`Cliente ${this.props.dni}`}
          body={<p>Datos del cliente {this.props.customer.name} </p>} >
        </AppFrame>
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
};

//* Voy a filtrar por dni (que lo tengo en las propiedades) para obtener los
//* datos del cliente.
//* del state obtengo el array de customers, encuentro el cliente con el dni que me llega
const mapStateToProps = (state, props) => ({
  customer: state.customers.find( c => c.dni === props.dni)
});

export default connect(mapStateToProps, null)(CustomerContainer);