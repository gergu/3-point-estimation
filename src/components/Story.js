import React, { Component } from 'react';
import Task from './Task.js';
import './../App.css';

class Story extends Component {
  render() {
    return (
      <div className="story">
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">Story name:</span>
          </div>
          <input type="text"
                 defaultValue={this.props.name}
                 placeholder="Story name"
                 className="form-control"
                 onChange={e => this.props.handleStoryNameChange(this.props.id, e.target.value)}
          />
        </div>
        <div className="ml-3">
          {this.props.tasks.length > 0 &&
            <div className="row">
              <div className="col-6">Task name:</div>
              <div className="col-2">Optimistic:</div>
              <div className="col-2">Pessimistic:</div>
              <div className="col-2">Realistic:</div>
            </div>
          }
          {this.props.tasks.map((task) =>
            <Task key={task.id}
                  storyId={this.props.id}
                  handleEstimationChange={this.props.handleEstimationChange}
                  handleTaskNameChange={this.props.handleTaskNameChange}
                  {...task}
            />
          )}
        </div>
        <div>
          <button className="btn btn-outline-primary mb-1 ml-3" onClick={e => this.props.handleNewTask(this.props.id)}>Add new task</button>
        </div>
      </div>
    );
  }
}

export default Story;
