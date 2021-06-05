import { shallowEqual, useSelector } from "react-redux";
import {
  getEditingTaskId,
  getFilter,
  getSort,
  getTasks,
} from "../../store/app-store/selectors";

import Task from "../Task/Task";
import EditTask from "../EditTask/EditTask";
import { Filter } from "../../utils/filters";
import { Comparator, ComparatorName } from "../../utils/sort";

const TasksList = () => {
  const tasks = useSelector(getTasks, shallowEqual);
  const filter = useSelector(getFilter, shallowEqual);
  const sort = useSelector(getSort, shallowEqual);
  const editingTaskId = useSelector(getEditingTaskId, shallowEqual);

  return (
    <div className="board__tasks">
      {tasks
        .filter(Filter[filter])
        .sort((t) => {
          if (sort !== ComparatorName.DEFAULT) {
            if (t.dueDate) return -1;
            if (!t.dueDate) return 1;
            return 0;
          }
          return 1;
        })
        .sort(Comparator[sort])
        .map((t) => {
          if (editingTaskId !== t.id) {
            return <Task key={`task-${t.id}`} task={t} />;
          }

          return <EditTask key={`task-${t.id}`} />;
        })}
    </div>
  );
};

export default TasksList;
