import React, { Component } from 'react';
import Story from './Story.js';
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
      stories: [
        {
          id: 1,
          name: 'Story 1',
          tasks: [
            {id: 1, name: 'Task 1', optimistic: 2, pessimistic: 5, realistic: 3},
            {id: 2, name: 'Task 2', optimistic: 10, pessimistic: 20, realistic: 15}
          ]
        },
        {
          id: 2,
          name: 'Story 2',
          tasks: [
            {id: 3, name: 'Task 3', optimistic: 1, pessimistic: 5, realistic: 2},
            {id: 4, name: 'Task 4', optimistic: 5, pessimistic: 10, realistic: 6}
          ]
        }
      ]
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
      </div>
    );
  }
}

export default MainComponent;
