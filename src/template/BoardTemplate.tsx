import { listTasks, task } from "@/types/project";
import Style from "./BoardTemplate.module.css"

function BoardTemplate({ BoardList }: { BoardList: listTasks[] }) {
    return (
        <ul className={Style.containerList}>
            {BoardList.map((list, key) =>
                <ListTasks key={key} list={list} />
            )}
        </ul>
    );
}
const ListTasks = ({ list }: { list: listTasks }) => (
    <li className={Style.listBox}>
        {list.tittle}
        {list.tasks && (
            <ul className={Style.listTasks}>
                {list.tasks?.map((task, key) => (
                    <Task task={task} key={key} />
                ))}
            </ul>
        )}
        <AddTask />
    </li>
)

const Task = ({ task }: { task: task }) => (
    <li draggable="true" className={Style.task}>
        {task.tittle}
    </li>
)

const AddTask = () => (
    <div className={Style.addTask}>
        + Add Task
    </div>
)
export default BoardTemplate;