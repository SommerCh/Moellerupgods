import uuid from 'uuid/v1';
export const NewsReducer =(state, action)=>{
    switch(action.type){
        case 'ADD_NEWS':
            return [...state, {
                img:action.news.img,
                title: action.news.title,
                author: action.news.author,
                id: uuid()

               
            }]
            case 'REMOVE_NEWS':
                return state.filter(news=> news.id !== action.id)
   default:
       return state
            }
}