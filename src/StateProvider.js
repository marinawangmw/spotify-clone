import React, { useContext, useReducer, createContext} from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// para que los componentes tengan acceso a los estados
export const useStateValue = () => useContext(StateContext);