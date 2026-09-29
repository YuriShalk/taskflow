function homeTemplate() {
    return `
        <section class="hero">
            <span class="hero-label">GERENCIADOR DE TAREFAS</span>

            <h1>Organize suas tarefas de forma simples.</h1>

            <p>
                Crie, acompanhe e conclua suas tarefas em um único lugar.
            </p>

            <a href="/nova-tarefa" class="button" data-route>
                Criar nova tarefa
            </a>
        </section>

        <section class="summary">

            <article class="summary-card">
                <span class="summary-number">0</span>
                <span class="summary-label">Tarefas</span>
            </article>

            <article class="summary-card">
                <span class="summary-number">0</span>
                <span class="summary-label">Pendentes</span>
            </article>

            <article class="summary-card">
                <span class="summary-number">0</span>
                <span class="summary-label">Concluídas</span>
            </article>

        </section>
    `;
}

function taskTemplate(task) {
    const priorityEmoji = {
        Alta: "🔴",
        Média: "🟡",
        Baixa: "🟢"
    };

    return `
        <article class="task-card">
            <h3>${task.titulo}</h3>

            <p>
                Prioridade:
                ${priorityEmoji[task.prioridade] || "⚪"}
                ${task.prioridade}
            </p>
        </article>
    `;
}

function tasksTemplate(tasks) {
    const taskList = tasks.length > 0
        ? tasks.map(taskTemplate).join("")
        : `
            <div class="empty-state">
                <p>Nenhuma tarefa cadastrada.</p>
            </div>
        `;

    return `
        <section class="page-section">
            <span class="hero-label">TAREFAS</span>

            <h1>Minhas tarefas</h1>

            <p>
                Confira as tarefas cadastradas na aplicação.
            </p>

            <div class="task-list">
                ${taskList}
            </div>

            <a href="/nova-tarefa" class="button" data-route>
                Criar nova tarefa
            </a>
        </section>
    `;
}

function newTaskTemplate() {
    return `
        <section class="page-section">
            <span class="hero-label">NOVA TAREFA</span>

            <h1>Criar nova tarefa</h1>

            <p>
                Preencha os dados abaixo para cadastrar uma nova tarefa.
            </p>

            <form id="task-form" class="task-form">

                <div class="form-group">
                    <label for="task-title">
                        Título da tarefa
                    </label>

                    <input
                        type="text"
                        id="task-title"
                        name="title"
                        placeholder="Digite o título da tarefa"
                    >

                    <small id="title-counter">
                        0 caracteres
                    </small>

                    <small
                        id="title-error"
                        class="form-error"
                        aria-live="polite"
                    ></small>
                </div>

                <div class="form-group">
                    <label for="task-priority">
                        Prioridade
                    </label>

                    <select id="task-priority" name="priority">
                        <option value="Alta">Alta</option>
                        <option value="Média">Média</option>
                        <option value="Baixa">Baixa</option>
                    </select>
                </div>

                <button type="submit" class="button">
                    Adicionar tarefa
                </button>

                <p
                    id="form-success"
                    class="form-success"
                    aria-live="polite"
                ></p>

            </form>
        </section>
    `;
}

function notFoundTemplate() {
    return `
        <section class="page-section">
            <h1>Página não encontrada</h1>

            <p>
                A rota solicitada não existe.
            </p>

            <a href="/" class="button" data-route>
                Voltar para o início
            </a>
        </section>
    `;
}

export {
    homeTemplate,
    tasksTemplate,
    newTaskTemplate,
    notFoundTemplate
};