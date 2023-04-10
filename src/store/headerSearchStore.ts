import { makeAutoObservable } from "mobx";

class HeaderSearchStore {
  inputText = "";
  constructor() {
    makeAutoObservable(this);
  }

  changeInputTextSearch(inputText: string) {
    this.inputText = inputText;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HeaderSearchStore();
