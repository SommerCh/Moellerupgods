import React, {createContext, useReducer, useEffect} from 'react';
import {NewsReducer} from '../reducers/newsReducer';

export const NewsContext = createContext();

const NewsContextProvider = (props) => {
    const [newss, dispatch]= useReducer( NewsReducer,[],() =>{
        const localData= localStorage.getItem('newss');
        return localData? JSON.parse(localData) :[];
    } );
useEffect(()=>{
localStorage.setItem('newss', JSON.stringify(newss))
},[newss]);

    return ( 
        
       <NewsContext.Provider value={{newss, dispatch}}>
           {props.children}
       </NewsContext.Provider>
     );
}
 
export default NewsContextProvider;