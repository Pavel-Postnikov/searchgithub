import { makeAutoObservable } from "mobx";
import { IItem } from "../typings";

class ListsStore {
  searchList: IItem[] = [];
  featureList: IItem[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  addSearchList(items: IItem[]) {
    this.searchList = items;
  }

  addFeatureList(item: IItem) {
    if (!this.featureList.includes(item)) {
      this.featureList = this.featureList.concat(item);
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ListsStore();
