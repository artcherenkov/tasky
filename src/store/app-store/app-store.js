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
    case ActionType.REMOVE_TASK: {
      const updatedTasks = state.tasks
        .slice()
        .filter((t) => t.id !== action.payload);
      return { ...state, tasks: updatedTasks };
    }
    default:
      return state;
  }
};

export { appStore };
