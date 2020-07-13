import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

//? (1) body va a ser un elemento renderizable 
//?     (cualquier elemento que me pueden pasar desde React que se pueda renderizar)

const AppFrame = ({header, body}) => {
  return (
    <div>
      <div className="app-frame">
        <AppHeader title={header}></AppHeader>
        <div>{body}</div>
        <div> Aplicacion simple de ejemplo </div>
      </div>
    </div>
  );
};

AppFrame.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired, //! (1)
};

export default AppFrame;