import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import GenericContext from './GenericContext';

function GenericContextProvider({ children }) {
  const [idUser, setIdUser] = useState(0);

  const handleSaveLocalStorage = useCallback((key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const hadleGetItemLocaStorage = useCallback((key) => JSON
    .parse(localStorage.getItem(key)), []);

  const getIdUser = useCallback(() => {
    const { id } = hadleGetItemLocaStorage('user');
    setIdUser(id);
  }, [hadleGetItemLocaStorage]);

  useEffect(() => {
    getIdUser();
  }, [getIdUser]);

  const value = useMemo(() => ({
    handleSaveLocalStorage,
    idUser,
    hadleGetItemLocaStorage }), [
    handleSaveLocalStorage,
    hadleGetItemLocaStorage,
    idUser]);

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
