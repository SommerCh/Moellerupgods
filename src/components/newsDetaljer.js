import React, {useContext} from 'react';
import {NewsContext} from '../contexts/newsContext';

const NewsDetaljer = ({news}) => {
const {dispatch} = useContext(NewsContext);
return (


<div className="nyhedswrap" onClick={()=> dispatch({type: 'REMOVE_NEWS', id:news.id})}>
    <div className="textwrap">
        <h1 className="overskrift">{news.title}</h1>
        <p className="underrubrik">{news.underrubrik} </p>
        <p className="dato">{news.dato}</p>
    </div>
    <p className="link">Læs mere her</p>
</div>


);
}
export default NewsDetaljer;