import { action, computed, observable } from "mobx";

export const theCountState = observable({
  count: 0,
});

export const doubleCount = computed(() => theCountState.count * 2);

class Store {
  @observable
  anotherCount = 0;

  @computed
  get tripleCount() {
    return theCountState.count * 3;
  }

  @computed
  get squareTripleCount() {
    return this.tripleCount * this.tripleCount;
  }

  @computed
  get totalCount() {
    return this.anotherCount + theCountState.count;
  }

  @action
  addAnotherCount() {
    this.anotherCount = this.anotherCount + 1;
  }
}

export const globalStore = new Store();
(window as any).globalStore = globalStore;
