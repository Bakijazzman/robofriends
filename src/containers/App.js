import React from "react";
import CardList from "../components/cardList";
import SearchField from "../components/SearchBox"
import { robots } from "../components/robots";
import Scroll from "../components/Scroll";

class App extends React.Component{
    constructor() {
        super()
        this.state ={
            robots: robots,
            searchField: ''
        }
        
    }  
    componentDidMount(){
            fetch('http://jsonplaceholder.typicode.com/users')
            .then(response=>
                {return response.json()})
            .then(users=> {
                this.setState({robots:users})
            })
        }
    onSearchChange=(event)=>{
            this.setState({searchField:event.target.value})
        }
      
    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if (robots.length===0){
            <h1>Loading</h1>
        }else{return (
            <div className="tc ">
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchField searchChange ={this.onSearchChange}/>
                <Scroll>
                 <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        )}
        
    }
}
export default App;