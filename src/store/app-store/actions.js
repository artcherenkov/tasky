export const ActionType = {
  LOAD_TASK: `store/load_task`,
  REMOVE_TASK: `store/remove_task`,
  SET_TASK_TO_EDIT: "store/set_task_to_edit",
  CHANGE_FILTER: "store/change_filter",
  CHANGE_SORT: "store/change_sort",
};

export const loadTask = (payload) => ({
  type: ActionType.LOAD_TASK,
  payload,
});

export const setTaskToEdit = (payload) => ({
  type: ActionType.SET_TASK_TO_EDIT,
  payload,
});

export const removeTask = (payload) => ({
  type: ActionType.REMOVE_TASK,
  payload,
});

export const changeFilter = (payload) => ({
  type: ActionType.CHANGE_FILTER,
  payload,
});

export const changeSort = (payload) => ({
  type: ActionType.CHANGE_SORT,
  payload,
});
