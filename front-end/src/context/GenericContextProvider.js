import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';
import GenericContext from './GenericContext';

function GenericContextProvider({ children }) {
  const handleSaveLocalStorage = useCallback((key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const hadleGetItemLocaStorage = useCallback((key) => localStorage.getItem(key), []);

  const value = useMemo(() => ({
    handleSaveLocalStorage,
    hadleGetItemLocaStorage }), [handleSaveLocalStorage, hadleGetItemLocaStorage]);

  return (
    <GenericContext.Provider value={ value }>
      {children}
    </GenericContext.Provider>
  );
}

GenericContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GenericContextProvider;
