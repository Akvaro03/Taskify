import { listTasks } from "@/types/project";
import Style from "./BoardTemplate.module.css"

function BoardTemplate({ BoardList }: { BoardList: listTasks[] }) {
    console.log(BoardList)
    return (
        <div className="flex p-10	">
            {BoardList.map((list, key) => <ListTasks key={key} list={list} />)}
        </div>
    );
}
const ListTasks = ({ list }: { list: listTasks }) => (
    <div className="flex p-4">
        {list.tittle}
    </div>
)
export default BoardTemplate;