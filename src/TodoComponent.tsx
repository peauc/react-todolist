import * as React from 'react'
import TodoModel from './TodoModel'


interface State {
    checked: boolean
}

export default class TodoComponent extends React.Component<TodoModel, State> {
    public constructor(todo: TodoModel) {
        super(todo);
        this.state = { checked: this.props.checked };
    }

    public handleChecked() {
        this.setState({
            checked: !this.state.checked
        })
    }

    public render() {
        return (
            <div className="todo" key={this.props.id}>
                <span className="todo-date">{this.props.date}</span>
                <span className="todo-text">{this.props.todo}</span>
                <input className="todo-checkbox" type="checkbox" defaultChecked={this.state.checked} onChange={this.handleChecked}/>
            </div>
        );
    }
}
