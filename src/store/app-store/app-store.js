import { TASKS } from "../../mock/task";
import { ActionType } from "./actions";
import { FilterName } from "../../utils/filters";
import { ComparatorName } from "../../utils/sort";

const initialState = {
  tasks: TASKS,
  editingTaskId: -1,
  filter: FilterName.ALL,
  sort: ComparatorName.DEFAULT,
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
      return {
        ...state,
        editingTaskId: action.payload,
        filter: FilterName.ALL,
        sort: ComparatorName.DEFAULT,
      };
    }
    case ActionType.REMOVE_TASK: {
      const updatedTasks = state.tasks
        .slice()
        .filter((t) => t.id !== action.payload);
      return { ...state, tasks: updatedTasks };
    }
    case ActionType.CHANGE_FILTER: {
      return { ...state, filter: action.payload };
    }
    case ActionType.CHANGE_SORT: {
      return { ...state, sort: action.payload };
    }
    default:
      return state;
  }
};

export { appStore };
