import React, { Component } from 'react';
import './../App.css';

class Task extends Component {
  render() {
    return (
      <li>
        <input type="text"
               placeholder="Task name"
               defaultValue={this.props.name}
               onChange={e => this.props.handleTaskNameChange(this.props.id, e.target.value, this.props.storyId)}
        />
        <input type="number"
               min="0"
               placeholder="optimistic"
               defaultValue={this.props.optimistic} onChange={e => this.props.handleEstimationChange(this.props.id, e.target.value, this.props.storyId, 'optimistic')}
        />
        <input type="number"
               min="0"
               placeholder="pessimistic"
               defaultValue={this.props.pessimistic} onChange={e => this.props.handleEstimationChange(this.props.id, e.target.value, this.props.storyId, 'pessimistic')}
        />
        <input type="number"
               min="0"
               placeholder="realistic"
               defaultValue={this.props.realistic} onChange={e => this.props.handleEstimationChange(this.props.id, e.target.value, this.props.storyId, 'realistic')}
        />
      </li>
    );
  }
}

export default Task;
