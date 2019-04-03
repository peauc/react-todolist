import * as React from 'react'

import TodoComponent from './TodoComponent'
import TodoModel from './TodoModel'

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
        const todos = this.state.todoList.map((todo) => <TodoComponent key={todo.id} id={todo.id} date={todo.date} checked={todo.checked} todo={todo.todo}/>);
        return (
            <div className="Todolist">
                {todos}
            </div>
        )
    }
}

