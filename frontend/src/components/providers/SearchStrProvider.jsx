import { createContext, useState } from "react";

export const SearchStrContext = createContext({});

export const SearchStrProvider = props => {
  const { children } = props;

  const [ searchStr, setSearchStr ] = useState("");

  return (
    <SearchStrContext.Provider value={{ searchStr, setSearchStr }}>
      {children}
    </SearchStrContext.Provider>
  )
}
