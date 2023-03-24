import React from "react";
import CardList from "./cardList";
import { robots } from "./robots";
import 'tachyons'

const App =()=>{
    return (
        <div>
            <h1>ROBOFRIENDS</h1>
            <input type={"search"} placeholder='search robots'/>
            <CardList robots = {robots}/>
        </div>
    )
}
export default App;