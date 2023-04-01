import { makeAutoObservable } from "mobx";

class ErrorRequestStore {
  controllerCancelRequest = new AbortController();
  hasErrorFast = false;
  errorMessage = "";
  constructor() {
    makeAutoObservable(this);
  }
  createController() {
    this.controllerCancelRequest = new AbortController();
  }
  changeErrorFast(hasFastRequest: boolean) {
    this.hasErrorFast = hasFastRequest;
  }
  changeErrorMessage(message: string) {
    this.errorMessage = message;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ErrorRequestStore();
