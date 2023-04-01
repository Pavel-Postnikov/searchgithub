import { makeAutoObservable } from "mobx";

class HeaderSearchStore {
  inputText = "";
  loadingCopy = false;
  constructor() {
    makeAutoObservable(this);
  }

  changeInputTextSearch(inputText: string) {
    this.inputText = inputText;
  }

  changeLoadingCopy(loading: boolean) {
    this.loadingCopy = loading;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HeaderSearchStore();
