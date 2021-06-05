import { TASKS } from "../../mock/task";
import { ActionType } from "./actions";

const initialState = {
  tasks: TASKS,
  editingTaskId: -1,
};

const appStore = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_TASK: {
      const currentTasks = state.tasks.slice();
      const taskToLoad = action.payload;

      const foundTaskIndex = currentTasks.findIndex(
        (t) => t.id === taskToLoad.id
      );

      if (foundTaskIndex === -1) {
        return { ...state, tasks: [taskToLoad, ...currentTasks] };
      }

      currentTasks[foundTaskIndex] = taskToLoad;
      return { ...state, tasks: currentTasks };
    }
    case ActionType.SET_TASK_TO_EDIT: {
      return { ...state, editingTaskId: action.payload };
    }
    default:
      return state;
  }
};

export { appStore };
