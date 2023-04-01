import API, { SearchAPI } from "../api/SearchAPI";
import ErrorRequestStore from "../store/errorRequestStore";

class SearchController {
  private readonly api: SearchAPI;

  constructor() {
    this.api = API;
  }

  async getSearchList(inputText: string, callback: () => void) {
    try {
      const response = await this.api.getList(inputText);

      if (response.status === 403) {
        ErrorRequestStore.changeErrorFast(true);
        setTimeout(() => {
          callback();
        }, 15000);
      } else {
        ErrorRequestStore.changeErrorFast(false);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      ErrorRequestStore.changeErrorMessage((e as Error).message);
    }
  }
}

export default new SearchController();
