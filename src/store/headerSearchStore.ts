import { makeAutoObservable } from "mobx";
import SearchController from "../controllers/SearchController";
import ListsStore from "./listsStore";
import debounce from "lodash.debounce";

class HeaderSearchStore {
  inputText = "";
  sendRequest = debounce(async function requestOnChange(text: string) {
    const data = await SearchController.getSearchList(text);
    ListsStore.addSearchList(data?.items);
  }, 500);

  constructor() {
    makeAutoObservable(this);
  }

  changeInputTextSearch(inputText: string) {
    this.inputText = inputText;
  }

  get changeRequest() {
    this.sendRequest(this.inputText);
    return this.inputText;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HeaderSearchStore();
