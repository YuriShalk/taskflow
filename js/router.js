import {
    homeTemplate,
    tasksTemplate,
    newTaskTemplate,
    notFoundTemplate
} from "./templates.js";

import { getTasks } from "./storage.js";

const routes = {
    "/": () => homeTemplate(),

    "/tarefas": () => tasksTemplate(getTasks()),

    "/nova-tarefa": () => newTaskTemplate()
};

function renderRoute(path) {
    const app = document.querySelector("#app");

    const render = routes[path];

    if (!render) {
        app.innerHTML = notFoundTemplate();

        twemoji.parse(app);

        return;
    }

    app.innerHTML = render();

    twemoji.parse(app);
}

function navigate(path) {
    history.pushState({}, "", path);

    renderRoute(path);
}

function initializeRouter() {
    document.addEventListener("click", (event) => {
        const link = event.target.closest("[data-route]");

        if (!link) {
            return;
        }

        event.preventDefault();

        const path = link.getAttribute("href");

        navigate(path);
    });

    window.addEventListener("popstate", () => {
        renderRoute(window.location.pathname);
    });

    const initialPath = window.location.pathname.endsWith("index.html")
        ? "/"
        : window.location.pathname;

    renderRoute(initialPath);
}

export {
    initializeRouter
};