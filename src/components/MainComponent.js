import React, { Component } from 'react';
import Story from './Story.js';
import Summary from './Summary.js';
import generateId from './../utils/idGenerator.js';
import './../App.css';

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.handleEstimationChange = this.handleEstimationChange.bind(this);
    this.handleTaskNameChange = this.handleTaskNameChange.bind(this);
    this.handleStoryNameChange = this.handleStoryNameChange.bind(this);
    this.handleNewStory = this.handleNewStory.bind(this);
    this.handleNewTask = this.handleNewTask.bind(this);

    this.state = {
      stories: []
    }
  }

  handleStoryNameChange(storyId, value) {
    let newState = this.state;

    let storyIndex = newState.stories.findIndex((story) => story.id === storyId);

    newState.stories[storyIndex].name = value;

    this.setState(newState);
  }

  handleTaskNameChange(taskId, value, storyId) {
    let newState = this.state;

    let storyIndex = newState.stories.findIndex((story) => story.id === storyId);
    let taskIndex = newState.stories[storyIndex].tasks.findIndex((task) => task.id === taskId);

    newState.stories[storyIndex].tasks[taskIndex].name = value;

    this.setState(newState);
  }

  handleEstimationChange(taskId, value, storyId, type) {
    let newState = this.state;

    let storyIndex = newState.stories.findIndex((story) => story.id === storyId);
    let taskIndex = newState.stories[storyIndex].tasks.findIndex((task) => task.id === taskId);

    newState.stories[storyIndex].tasks[taskIndex][type] = parseInt(value, 10);

    this.setState(newState);
  }

  handleNewStory() {
    let newState = this.state;

    newState.stories.push({
      id: generateId(),
      name: '',
      tasks: []
    });

    this.setState(newState);
  }

  handleNewTask(storyId) {
    let newState = this.state;

    let storyIndex = newState.stories.findIndex((story) => story.id === storyId);

    newState.stories[storyIndex].tasks.push({
      id: generateId(),
      name: '',
      optimistic: 0,
      pessimistic: 0,
      realistic: 0
    });

    this.setState(newState);
  }

  render() {
    return (
      <div className="App-intro">
        {this.state.stories.map((story) =>
          <Story key={story.id}
                 handleStoryNameChange={this.handleStoryNameChange}
                 handleTaskNameChange={this.handleTaskNameChange}
                 handleEstimationChange={this.handleEstimationChange}
                 handleNewTask={this.handleNewTask}
                 {...story}
          />
        )}
        <div>
          <button type="submit" onClick={this.handleNewStory}>Add new story</button>
        </div>
        <Summary {...this.state} />
      </div>
    );
  }
}

export default MainComponent;
