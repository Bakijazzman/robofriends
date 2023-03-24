import React from "react";
import CardList from "./cardList";
import { robots } from "./robots";
import 'tachyons'

const App =()=>{
    return (
        <div className="tc ">
            <h1>ROBOFRIENDS</h1>
            <input type={"search"} placeholder='search robots' className="pa3 ba b--green bg-lightest-blue"/>
            <CardList robots = {robots}/>
        </div>
    )
}
export default App;