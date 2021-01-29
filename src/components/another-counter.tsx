import { action, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { globalStore } from "../store";

@observer
export class AnotherCount extends React.Component {
  @observable
  anotherCount = 0;

  @action
  addAnotherCount() {
    this.anotherCount++;
  }
  render() {
    return (
      <div className="todo-block">
        <p>Another Count</p>
        <div>Another Count = {this.anotherCount}</div>
        <div>Triple Count = {globalStore.tripleCount}</div>
        <button
          onClick={() => {
            this.addAnotherCount()
          }}
        >
          Add another count
        </button>
      </div>
    );
  }
}