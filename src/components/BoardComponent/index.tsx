import { projectType } from "@/types/project";
import Style from "./BoardComponent.module.css"
import BoardTemplate from "@/template/BoardTemplate";

function BoardComponent({ project }: { project: projectType }) {
    return (
        <article className={Style.BoardComponent}>
            <div className={Style.headerTasks}>
                <h3 className="text-2xl font-semibold">
                    {project.name}
                </h3>
                <div className={Style.containerButtons}>
                    <button >Filter</button>
                    <button className={Style.addTask}>+ Add List</button>
                </div>
            </div>
            {project.boardList && (
                <BoardTemplate BoardList={project.boardList} />
            )}
        </article>
    );
}

export default BoardComponent;