import errorRequestStore from "../store/requestStore";

export class SearchAPI {
  getList(data: string) {
    return fetch(`https://api.github.com/search/repositories?q=${data}`, {
      signal: errorRequestStore.controllerCancelRequest.signal,
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new SearchAPI();
