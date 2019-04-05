import * as React from 'react';
import './App.scss';
import TodoListComponent from "./TodoListComponent";
import TodoModel from "./TodoModel";

const todoListHolder: TodoModel[] = [
    {id: 1, date: new Date(), todo: 'Say hello', checked: false},
    {id: 2, date: new Date(), todo: 'Say hello', checked: false}
    ];

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <TodoListComponent todoList={todoListHolder}/>
            </div>
        );
    }
}

export default App;
