import { shallowEqual, useSelector } from "react-redux";
import { getEditingTaskId, getTasks } from "../../store/app-store/selectors";

import Task from "../Task/Task";
import EditTask from "../EditTask/EditTask";

const TasksList = () => {
  const tasks = useSelector(getTasks, shallowEqual);
  const editingTaskId = useSelector(getEditingTaskId, shallowEqual);

  return (
    <div className="board__tasks">
      {tasks.map((t) => {
        if (editingTaskId !== t.id) {
          return <Task task={t} />;
        }

        return <EditTask />;
      })}
    </div>
  );
};

export default TasksList;
