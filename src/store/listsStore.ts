import { makeAutoObservable } from "mobx";
import { IItem } from "../typings";

class ListsStore {
  searchList: IItem[] = [];
  electedList: IItem[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  addSearchList(items: IItem[]) {
    this.searchList = items;
  }

  addElectedList(item: IItem) {
    if (!this.electedList.includes(item)) {
      this.electedList = this.electedList.concat(item);
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ListsStore();
