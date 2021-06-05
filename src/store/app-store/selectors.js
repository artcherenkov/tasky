export const getTasks = (state) => state.store.tasks;
export const getEditingTaskId = (state) => state.store.editingTaskId;
export const getTaskById = (id) => (state) =>
  state.store.tasks.find((t) => t.id === id);
