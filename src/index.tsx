import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/app";
import { AppStoreFactory } from "./components/appstorefactory";

const main = async () => {
    const storeFactory: AppStoreFactory = new AppStoreFactory();
    const app = document.getElementById("app");
    const appStore = await storeFactory.create();

    ReactDOM.render(
        <App store={appStore} />,
        app);

    (window as any).NProgress.done();
    delete (window as any).requirejs.onResourceLoad;
    app.className = "";
};

main()
    .catch((error: Error) => {
        alert(error.message);
    });
