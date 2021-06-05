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
import { useState } from "react";

const TASKS_PER_STEP = 4;
const INITIAL_COUNT = 8;

const TasksList = () => {
  const tasks = useSelector(getTasks, shallowEqual);
  const filter = useSelector(getFilter, shallowEqual);
  const sort = useSelector(getSort, shallowEqual);
  const editingTaskId = useSelector(getEditingTaskId, shallowEqual);

  const [shownTasksCount, setShownTasksCount] = useState(INITIAL_COUNT);
  const onShowMoreBtnClick = () =>
    setShownTasksCount((prevState) => prevState + TASKS_PER_STEP);

  return (
    <>
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
          .slice(0, shownTasksCount)
          .map((t) => {
            if (editingTaskId !== t.id) {
              return <Task key={`task-${t.id}`} task={t} />;
            }

            return <EditTask key={`task-${t.id}`} />;
          })}
      </div>
      {shownTasksCount < tasks.length && (
        <button
          className="load-more"
          type="button"
          onClick={onShowMoreBtnClick}
        >
          load more
        </button>
      )}
    </>
  );
};

export default TasksList;
