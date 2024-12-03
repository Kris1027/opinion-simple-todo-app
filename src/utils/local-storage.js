export const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getTasksFromLocalStorage = () => {
    const savedTask = localStorage.getItem('tasks');
    return savedTask ? JSON.parse(savedTask) : [];
};
