import React from "react";
import "./App.css";
import { runInAction } from "mobx";
import { observer } from "mobx-react";
import { doubleCount, theCountState } from "./store";
import { Todo } from "./components/todo";
import { AddCount } from "./components/add-count";
import { AnotherCount } from "./components/another-counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="todo-block">
          <p>Count in App = {theCountState.count}</p>
          <div>Double count in App = {doubleCount.get()}</div>
          <button
            onClick={() => {
              // use run in action to update state
              runInAction(() => {
                theCountState.count++;
              });
            }}
          >
            Add Count
          </button>
        </div>
        <div style={{ display: "flex" }}>
          <Todo />
          <AddCount />
          <AnotherCount />
        </div>
      </header>
    </div>
  );
}

export default observer(App);
