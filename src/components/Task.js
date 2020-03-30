import React, { Component } from 'react';
import './../App.css';

class Task extends Component {
  render() {
    return (
      <div className="row mb-1">
        <div className="col-6">
          <input type="text"
                 placeholder="Task name"
                 defaultValue={this.props.name}
                 className="form-control task-input"
                 onChange={e => this.props.handleTaskNameChange(this.props.id, e.target.value, this.props.storyId)}
          />
        </div>
        <div className="col-2">
          <input type="number"
                 min="0"
                 placeholder="optimistic"
                 className="form-control estimation-input"
                 title="Optimistic"
                 defaultValue={this.props.optimistic.toString()} onChange={e => this.props.handleEstimationChange(this.props.id, e.target.value, this.props.storyId, 'optimistic')}
          />
        </div>
        <div className="col-2">
          <input type="number"
                 min="0"
                 placeholder="pessimistic"
                 className="form-control estimation-input"
                 defaultValue={this.props.pessimistic.toString()} onChange={e => this.props.handleEstimationChange(this.props.id, e.target.value, this.props.storyId, 'pessimistic')}
          />
        </div>
        <div className="col-2">
          <input type="number"
                 min="0"
                 placeholder="realistic"
                 className="form-control estimation-input"
                 defaultValue={this.props.realistic.toString()} onChange={e => this.props.handleEstimationChange(this.props.id, e.target.value, this.props.storyId, 'realistic')}
          />
        </div>
      </div>
    );
  }
}

export default Task;
