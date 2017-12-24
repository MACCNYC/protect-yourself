import React, { Component } from 'react';
import Menu from './Menu';
import Action from './Action';

function Error(props) {
  return <div>
    <p>Opps something went wrong :(</p>
    <a onClick={props.onRestart}>Restart?</a>
  </div>
}

class Step extends Component {

  renderByType() {
    if (!this.props.data) {
      return <Error onRestart={this.props.onRestart} />
    }

    switch(this.props.data.type) {
      case 'menu':
        return <Menu
                onStartGoal={this.props.onStartGoal}
                completedGoals={this.props.completedGoals}
                topics={this.props.data.topics}></Menu>
      default:
        return <Action
            onNextStep={this.props.onNextStep}
            onStartGoal={this.props.onStartGoal}
            onRestart={this.props.onRestart}
            data={this.props.data}
            goal={this.props.goal}/>
    }
  }

  render() {
    return <div>{this.renderByType()}</div>
  }
}

export default Step;
