import React from "react";
import "./Todotask.css";

export default function Todotask({ task , taskToggle , deleteTask}) {
  return (
    <div className="task-style">
    <button onClick={(e)=> {deleteTask(task,task.id)}}>x</button>
      <span className={`${task.isDone ? 'task-style-done' : ''}`}>
        {task.id}-{task.text}
      </span>

      <span>
        <input type="checkbox" checked={task.isDone} onChange={(e) => {taskToggle(e,task.id)}}></input>
      </span>
    </div>
  );
}
