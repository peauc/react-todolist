import * as React from 'react'

import TodoComponent from './TodoComponent'
import TodoModel from './TodoModel'

import './TodoList.scss'

interface Props {
    todoList: TodoModel[],
}

interface State {
    todoList: TodoModel[]
}

export default class TodoListComponent extends React.Component<Props, State> {
    public constructor(todo: Props) {
        super(todo);
        this.state = {todoList: this.props.todoList };
    }
    public render() {
        const todos = this.state.todoList.map((todo) => <li key={todo.id}><TodoComponent id={todo.id} date={todo.date} checked={todo.checked} todo={todo.todo}/></li>);
        return (
            <div className="todolist-container">
                <ul className="todolist">
                    {todos}
                </ul>
            </div>
        )
    }
}

