export const ActionType = {
  LOAD_TASK: `store/load_task`,
  SET_TASK_TO_EDIT: "store/set_task_to_edit",
};

export const loadTask = (payload) => ({
  type: ActionType.LOAD_TASK,
  payload,
});

export const setTaskToEdit = (payload) => ({
  type: ActionType.SET_TASK_TO_EDIT,
  payload,
});
