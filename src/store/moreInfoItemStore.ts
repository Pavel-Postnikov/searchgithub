import { makeAutoObservable } from "mobx";
import { IItemMoreInfo } from "../typings";

const nullItem = {
  id: "",
  name: "",
  full_name: "",
  html_url: "",
  description: "",
  forks_count: 0,
  stargazers_count: 0,
  created_at: "",
  homepage: "",
  language: "",
  owner: {
    avatar_url: "",
  },
};

class MoreInfoItemStore {
  moreInfoItem: IItemMoreInfo = nullItem;

  constructor() {
    makeAutoObservable(this);
  }

  changeMoreInfoItem(item: IItemMoreInfo) {
    this.moreInfoItem = item;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MoreInfoItemStore();
