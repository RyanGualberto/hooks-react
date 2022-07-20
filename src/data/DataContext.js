import React from "react";

export const data = {
    number: 123,
    text: 'context API'
}

const DataContext = React.createContext(null);

export default DataContext;