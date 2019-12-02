import React, {useState, useContext} from 'react';
import {NewsContext} from '../contexts/newsContext';

const NewnewsForm =()=>{
    const {dispatch}= useContext(NewsContext);
    const [title, setTitle]=useState('');
    const [underrubrik, setUnderrubrik]=useState('');
    const [dato, setDato]=useState('');
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch({type: 'ADD_NEWS', news:{
           title, underrubrik, dato
        }} );
        setTitle('');
        setUnderrubrik('');
        setDato('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Nyt opslag</label>
            <input type="text" placeholder="Overskrift h1" value={title} required onChange={(e) => setTitle (e.target.value)}/>
            <input type="text" placeholder="Underrubrik" value={underrubrik} required onChange={(e) => setUnderrubrik (e.target.value)}/>
            <input type="text" placeholder="Dato" value={dato} required onChange={(e) => setDato (e.target.value)}/>
            <input type="submit" value="Tilføj opslag"/>
        </form>
    )
}

 export default NewnewsForm