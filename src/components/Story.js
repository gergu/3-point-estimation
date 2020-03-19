import React, { Component } from 'react';
import Task from './Task.js';
import './../App.css';

class Story extends Component {
  render() {
    return (
      <div className="story">
        <h3>
          Story name:
          <input type="text"
                 defaultValue={this.props.name}
                 placeholder="Story name"
                 className="story-input"
                 onChange={e => this.props.handleStoryNameChange(this.props.id, e.target.value)}
          />
        </h3>
        <ul>
          {this.props.tasks.length > 0 &&
            <li>
              <div className="task-input">Task name:</div>
              <div className="estimation-input">Optimistic:</div>
              <div className="estimation-input">Pessimistic:</div>
              <div className="estimation-input">Realistic:</div>
            </li>
          }
          {this.props.tasks.map((task) =>
            <Task key={task.id}
                  storyId={this.props.id}
                  handleEstimationChange={this.props.handleEstimationChange}
                  handleTaskNameChange={this.props.handleTaskNameChange}
                  {...task}
            />
          )}
        </ul>
        <div>
          <button className="btn" onClick={e => this.props.handleNewTask(this.props.id)}>Add new task</button>
        </div>
      </div>
    );
  }
}

export default Story;
