type projectType = {
    name: string;
    users: string[],
    boardList?: listTasks[]
}

type listTasks = {
    tittle: string,
    tasks?: task[]
}

type task = {
    tittle: string,
    users?: string[],
    dateEnd?: number,
    description?: string
}

export type { projectType, listTasks, task };