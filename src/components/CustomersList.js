import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './CustomerListItem';
//? (1) Itero el array customers

const CustomersList = ({ customers, urlPath }) => {
  return (
    <div>
      <div className="customers-list">
        {
          //! (1)
          customers.map( c =>
            <CustomersListItem
              key={c.dni}
              dni={c.dni}
              name={c.name}
              editAction={'Editar'}
              delAction={'Eliminar'}
              urlPath={urlPath}>
            </CustomersListItem>)
        }
      </div>
    </div>
  );
};

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomersList;