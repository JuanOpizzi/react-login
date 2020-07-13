import React from 'react';
import PropTypes from 'prop-types';

//? (1) Esto implica todo tipo de elemento renderizable que React nos permita

const CustomersActions = ({ children }) => {
  return (
    <div>
      <div className="customers-actions">
        <div>{children}</div>
      </div>
    </div>
  );
};

CustomersActions.propTypes = {
  children: PropTypes.node.isRequired, //! (1)
};

export default CustomersActions;