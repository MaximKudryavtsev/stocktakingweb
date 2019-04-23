import { createBrowserHistory, History } from "history";
import { UserStore } from "../app/stores";

const history = createBrowserHistory();

export namespace AppContext {
    const userStore = new UserStore();

    export function getHistory(): History {
        return history;
    }

    export function getUserStore(): UserStore {
        return userStore;
    }
}
