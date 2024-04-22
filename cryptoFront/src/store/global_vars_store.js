import { makeAutoObservable } from "mobx";

class GlobalVarsStore {
  tgInfo = "asdasd";
  constructor() {
    makeAutoObservable(this);
  }
  updateTgInfo = (newValue) => {
    this.tgInfo = newValue;
  };
}

export default GlobalVarsStore;
