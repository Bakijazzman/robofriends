import React from "react";
import CardList from "./cardList";
import { robots } from "./robots";
import 'tachyons'

const App =()=>{
    return (
        <div className="tc ">
            <h1>ROBOFRIENDS</h1>
            <searchField/>
            <CardList robots = {robots}/>
        </div>
    )
}
export default App;