import React from "react";
import CardList from "./cardList";
import SearchField from "./SearchBox"
import { robots } from "./robots";

class App extends React.Component{
    constructor() {
        super()
        this.state ={
            robots: robots,
            searchField: ''
        }
        
    }  
    componentDidMount(){
            fetch('http://jsonplaceholder.typicode.com/u(sers')
            .then(response=>response.json())
            .then(users=> this.state.robots.setState({robots:users}))
        }
    onSearchChange=(event)=>{
            this.setState({searchField:event.target.value})
        }
      
    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className="tc ">
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchField searchChange ={this.onSearchChange}/>
                <CardList robots = {filteredRobots}/>
            </div>
        )
    }
}
export default App;