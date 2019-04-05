import * as React from 'react'
import TodoModel from './TodoModel'

import './TodoComponent.scss'

interface State {
    checked: boolean
}

export default class TodoComponent extends React.Component<TodoModel, State> {
    public constructor(todo: TodoModel) {
        super(todo);
        this.state = { checked: this.props.checked };
    }


    public handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            checked: e.target.checked
        });
    };

    public render() {
        return (
            <div className={'todo ' + (this.state.checked? 'checked ': '')} key={this.props.id} >
                <span className="todo-date">{this.props.date.toDateString()}</span>
                <div className="todo-body">
                    <span className="todo-text">{this.props.todo}</span>
                    <input className="todo-checkbox" type="checkbox" defaultChecked={this.state.checked} onChange={this.handleChecked}/>
                </div>
            </div>
        );
    }
}
