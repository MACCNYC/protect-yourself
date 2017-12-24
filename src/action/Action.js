import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Badge from './Badge.js';
import Subtasks from './Subtasks.js';
import goals from '../data/goals.json';

class Action extends Component {

  onNextStepSelect = (data) => {
      if (data.step) {
          this.props.onNextStep(data.step);
      } else if (data.goal) {
          this.props.onStartGoal(data.goal);
      } else if (data.restart) {
          this.props.onRestart();
      }
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this)
      .querySelectorAll('a')
      .forEach(e => e.setAttribute('target', '_blank'));
  }

  componentDidMount() {
    this.componentDidUpdate()
  }

  render() {
    const showBadge = this.props.data.action && this.props.data.action.type === 'award'
    const badgeUrl = `badges/large/${this.props.goal}.gif`
    const goalData = goals[this.props.goal];
    return <div>
        {showBadge && <Badge goalData={goalData} complete={true} />}
        <p dangerouslySetInnerHTML={{__html: this.props.data.description}}></p>
        {this.props.data.subtasks && this.props.data.subtasks.length &&
          <Subtasks tasks={this.props.data.subtasks} />}
        {this.props.data.nextSteps && this.props.data.nextSteps.map((prompt) =>
            <button
                key={prompt.step || prompt.goal || "restart"}
                onClick={() => this.onNextStepSelect(prompt)}>
              {prompt.prompt}</button>)
        }
      </div>
  }
}

export default Action;
