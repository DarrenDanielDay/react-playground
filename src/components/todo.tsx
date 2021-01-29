import { observer } from "mobx-react";
import React from "react";
import { doubleCount } from "../store";

export const Todo: React.FC = observer(() => (
  <div className="todo-block">
    <p>Todo</p>
    <div>Double Count = {doubleCount.get()}</div>
  </div>
));
