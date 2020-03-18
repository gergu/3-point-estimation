import React, { Component } from 'react';
import './../App.css';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.calculatedTasks = this.calculatedTasks.bind(this);
    this.eTotal = this.eTotal.bind(this);
    this.seTotal = this.seTotal.bind(this);
    this.tasks = this.tasks.bind(this);
  }

  calculatedTasks() {
    return this.tasks().map(task => {
      return {
        e: (task.optimistic + task.pessimistic + 4.0 * task.realistic)/6.0,
        se2: ( (task.pessimistic - task.optimistic)/6.0 )**2
      }
    });
  }

  tasks() {
    return this.props.stories.flatMap((story) => story.tasks);
  }

  eTotal() {
    return this.calculatedTasks().reduce((prev,curr) => prev + curr.e, 0.0);
  }

  seTotal() {
    return Math.sqrt( this.calculatedTasks().reduce((prev,curr) => prev + curr.se2, 0.0) );
  }

  mostLikely() {
    return
  }

  render() {
    return (
      <div>
        <p>E(Project): {this.eTotal().toFixed(2)}</p>
        <p>SE(Project): {this.seTotal().toFixed(2)}</p>
        <p>95% confidence: {this.eTotal().toFixed(0)} +/- {(2*this.seTotal()).toFixed(0)}</p>

        <p>
          from {(this.eTotal() - 2.0*this.seTotal()).toFixed(0)} to {(this.eTotal() + 2.0*this.seTotal()).toFixed(0)}
        </p>
      </div>
    );
  }
}

export default Summary;
