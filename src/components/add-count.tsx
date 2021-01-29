import { action } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { theCountState } from "../store";

export const AddCount: React.FC =observer(() => (
  <div className="todo-block">
    <p>Add count</p>
    <div>Current count = {theCountState.count}</div>
    <button
      onClick={action(() => {
        theCountState.count++;
      })}
    >
      Click To Add Count
    </button>
  </div>
));
