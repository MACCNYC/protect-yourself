import React from 'react';

function Subtasks(props) {
  return <ul>
    {props.tasks.map((task) => <li><label><input type="checkbox" /> {task}</label></li>)}
  </ul>;
}

export default Subtasks;
