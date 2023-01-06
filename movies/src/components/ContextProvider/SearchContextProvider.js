import React, { createContext, useEffect, useState } from 'react';

export const SearchContext = createContext();

function SearchContextProvider({ children }) {

  const [data, setData] = useState('');

  useEffect(() => {

  }, []);

  const handleChangeSearchData = (data) => {
    setData(data)
  };

  const contextValues = {
    data,
    handleChangeSearchData
  };

  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
