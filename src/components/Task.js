import React, { Component } from 'react';
import './../App.css';

class Task extends Component {
  render() {
    return (
      <li>
        <input type="text"
               placeholder="Task name"
               defaultValue={this.props.name}
               className="task-input"
               onChange={e => this.props.handleTaskNameChange(this.props.id, e.target.value, this.props.storyId)}
        />
        <input type="number"
               min="0"
               placeholder="optimistic"
               className="estimation-input"
               title="Optimistic"
               defaultValue={this.props.optimistic} onChange={e => this.props.handleEstimationChange(this.props.id, e.target.value, this.props.storyId, 'optimistic')}
        />
        <input type="number"
               min="0"
               placeholder="pessimistic"
               className="estimation-input"
               defaultValue={this.props.pessimistic} onChange={e => this.props.handleEstimationChange(this.props.id, e.target.value, this.props.storyId, 'pessimistic')}
        />
        <input type="number"
               min="0"
               placeholder="realistic"
               className="estimation-input"
               defaultValue={this.props.realistic} onChange={e => this.props.handleEstimationChange(this.props.id, e.target.value, this.props.storyId, 'realistic')}
        />
      </li>
    );
  }
}

export default Task;
