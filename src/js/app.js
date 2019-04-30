import React, { Component } from "react";
import { get } from "http";
import TodoItem from "./components/todo";
import Product from "./components/header"
import todosData from "./components/todosData";

class App extends Component {
    render() {
        return (<div className="todo__list">
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </div>
            
        );
    }
}

class Myinf extends Component {
    render() {
    const todosD = todosData.map((function(event) {return <TodoItem key={event.id} text={event.text} completed={event.completed} />}))
        return (
            
            <div>
               {todosD}
            </div>

        )
    }
}

export default Myinf;
