import { createContext, useReducer } from "react";

// const DEFAULT_CONTEXT={
//   cardList:[]
// };

// const CardList=createContext(DEFAULT_CONTEXT);

 export const CardList= createContext({
  cardlist: []

});

const cardListReducer= (currentCardList, action)=>{
  return currentCardList
};


const CardListProvider =(children)=>{
  
  const [cardlist,dispatchCardList]=useReducer(
    cardListReducer,
    DEFAULT_CARD_LIST );

  return <CardList.Provider value={{cardlist}}>{children}
  </CardList.Provider>;

};


const DEFAULT_CARD_LIST =[{
  id: '1',
  title : '',
  body: ''
}];
export default CardListProvider;