import PropTypes from 'prop-types';
import React from 'react';
import GenericContext from './GenericContext';

function GenericContextProvider({ children }) {
  return (
    <GenericContext.Provider>
      {children}
    </GenericContext.Provider>
  );
}

GenericContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GenericContextProvider;
