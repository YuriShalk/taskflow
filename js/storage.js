const STORAGE_KEY = "taskflow-tasks";

function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function getTasks() {
    const storedTasks = localStorage.getItem(STORAGE_KEY);

    if (!storedTasks) {
        return [];
    }

    return JSON.parse(storedTasks);
}

export {
    saveTasks,
    getTasks
};