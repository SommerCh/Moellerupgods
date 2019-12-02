import React, { useContext } from 'react';
import {NewsContext} from '../contexts/newsContext';
import NewsDetaljer from './newsDetaljer';


    const NewsList = () => {
        
    const {newss}=useContext(NewsContext);

return newss.length ? ( 

<div className="news-list">
    <ul>
       {newss.map(news=>{
           return(<NewsDetaljer news={news}key={news.id}/>)
       })}
    </ul>
</div>
 ):(
    <div className="empty">Der er ingen nyheder</div> 
 )
}
 
export default NewsList ;