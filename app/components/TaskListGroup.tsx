import TaskList from "./TaskList";
import checklist from "../../public/list_checklist_icon.svg";
function TaskListGroup() {
  return (
    <>
      <TaskList title="my Test list" count={1} icon={checklist} />
    </>
  );
}

export default TaskListGroup;
