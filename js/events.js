import { getTasks, saveTasks } from "./storage.js";

function initializeEvents() {
    document.addEventListener("submit", (event) => {
        const form = event.target.closest("#task-form");

        if (!form) {
            return;
        }

        event.preventDefault();

        const titleInput = form.querySelector("#task-title");
        const titleError = form.querySelector("#title-error");
        const formSuccess = form.querySelector("#form-success");

        const title = titleInput.value.trim();

        titleError.textContent = "";
        formSuccess.textContent = "";

        titleInput.classList.remove("input-error");

        if (title === "") {
            titleError.textContent =
                "Informe o título da tarefa.";

            titleInput.classList.add("input-error");

            return;
        }

        if (title.length < 3) {
            titleError.textContent =
                "O título deve possuir pelo menos 3 caracteres.";

            titleInput.classList.add("input-error");

            return;
        }

        const priority =
            form.querySelector("#task-priority").value;

        const tasks = getTasks();

        const newTask = {
            titulo: title,
            prioridade: priority
        };

        tasks.push(newTask);

        saveTasks(tasks);

        formSuccess.textContent =
            "Tarefa cadastrada com sucesso.";

        form.reset();

        document.querySelector("#title-counter").textContent =
            "0 caracteres";

        console.log("Tarefa salva:", newTask);
    });

    document.addEventListener("input", (event) => {
        const input = event.target.closest("#task-title");

        if (!input) {
            return;
        }

        const counter =
            document.querySelector("#title-counter");

        counter.textContent =
            `${input.value.length} caracteres`;

        const titleError =
            document.querySelector("#title-error");

        if (input.value.trim() !== "") {
            input.classList.remove("input-error");
            titleError.textContent = "";
        }
    });
}

export {
    initializeEvents
};