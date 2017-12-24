import React, { Component } from 'react';
import Badge from './Badge.js';
import goals from '../data/goals.json';

class Menu extends Component {

  renderTopic = (topic) => {
    return <div key={topic.title}>
        <h2>{topic.title}</h2>
        <p>{topic.description}</p>
        <div className="subgoals">
          {topic.goals.map(this.renderGoal)}
        </div>
    </div>
  }

  renderGoal = (goal) =>  {
    const goalData = goals[goal];
    const isCompleated = !!this.props.completedGoals[goal]
    const onClick = () => this.props.onStartGoal(goal);
    return <div key={goal.key}>
            <p>
              <Badge onClick={onClick} goalData={goalData} complete={isCompleated} />
              <br/>
              <button onClick={onClick}>{goalData.title}</button>
            </p>
        </div>
  }

  render() {
    return <div>
      {this.props.topics.map(this.renderTopic)}
      <footer>
        Want to contribute? Source on <a href="https://github.com/MACCNYC/protect-yourself">GitHub</a>.
      </footer>
    </div>;
  }
}

export default Menu;
