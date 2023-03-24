import React from "react";
import CardList from "./cardList";
import { robots } from "./robots";
const searchField= ()=>{
return(
    <div>
        <input type='search' placeHolder='search robots'/>
        <CardList robots = {robots}/>
    </div>
)
}
export default searchField;