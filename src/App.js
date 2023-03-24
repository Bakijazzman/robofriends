import React from "react";
import CardList from "./cardList";
import { robots } from "./robots";
import 'tachyons'

const App =()=>{
    return (
        <div>
            <CardList robots = {robots}/>
        </div>
    )
}
export default App;