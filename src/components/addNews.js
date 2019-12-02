import React from 'react';
import NewsContextProvider from '../contexts/newsContext';
import NewsList from './newsList';
import NewsForm from './newsForm';
import UploadImage from './upload';

const AddNewsConst = () => {
    return ( 

<NewsContextProvider>
    <UploadImage />
    <NewsList />
    <NewsForm />
  </NewsContextProvider>
     );
}
 
export default AddNewsConst;