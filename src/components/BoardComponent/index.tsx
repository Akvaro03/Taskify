import projectType from "@/types/project";
import Style from "./BoardComponent.module.css"

function BoardComponent({ project }: { project: projectType }) {
    return (
        <article className="h-full w-full">
            <div className="flex justify-between p-5 px-10 w-full">
                <h3 className="text-2xl font-semibold">
                    {project.name}
                </h3>
                <div className={Style.containerButtons}>
                    <button >Filter</button>
                    <button className={Style.addTask}>+ Add Task</button>
                </div>
            </div>
        </article>
    );
}

export default BoardComponent;