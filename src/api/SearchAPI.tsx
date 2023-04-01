export class SearchAPI {
  getList(data: string) {
    return fetch(`https://api.github.com/search/repositories?q=${data}`);
  }
}

export default new SearchAPI();
