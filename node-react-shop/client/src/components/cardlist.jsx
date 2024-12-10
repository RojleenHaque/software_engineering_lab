import { useContext } from "react";
import Card from "./card";
import { CardList as CardListData} from "../store/card-list-store";

const CardList=()=>{
  const {cardlist}= useContext(CardListData);
  return(
    <>
    {cardlist.map((card)=> 
    <Card
      key ={card.id} card={card} />)}
    
    </>

  );
};

export default CardList;