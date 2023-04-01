import errorRequestStore from "../store/errorRequestStore";

export class SearchAPI {
  getList(data: string) {
    return fetch(`https://api.github.com/search/repositories?q=${data}`, {
      signal: errorRequestStore.controllerCancelRequest.signal,
    });
  }
}

export default new SearchAPI();
