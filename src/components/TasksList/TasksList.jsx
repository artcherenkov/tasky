import { shallowEqual, useSelector } from "react-redux";
import {
  getEditingTaskId,
  getFilter,
  getTasks,
} from "../../store/app-store/selectors";

import Task from "../Task/Task";
import EditTask from "../EditTask/EditTask";
import { Filter } from "../../utils/filters";

const TasksList = () => {
  const tasks = useSelector(getTasks, shallowEqual);
  const filter = useSelector(getFilter, shallowEqual);
  const editingTaskId = useSelector(getEditingTaskId, shallowEqual);

  return (
    <div className="board__tasks">
      {tasks.filter(Filter[filter]).map((t) => {
        if (editingTaskId !== t.id) {
          return <Task key={`task-${t.id}`} task={t} />;
        }

        return <EditTask key={`task-${t.id}`} />;
      })}
    </div>
  );
};

export default TasksList;
