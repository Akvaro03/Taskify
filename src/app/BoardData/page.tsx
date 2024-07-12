import AsideProjectsComponent from "@/components/AsideProjectsComponent";
import BoardComponent from "@/components/BoardComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { projectType } from "@/types/project";

function BoardData() {
    return (
        <>
            <HeaderComponent />
            <main className="flex">
                <AsideProjectsComponent />
                <BoardComponent project={BoardDataExample}/>
            </main>
        </>
    );
}

const BoardDataExample: projectType = {
    name: "Project 1",
    users: [],
    boardList: [
        {
            tittle:"Lista 1",
            tasks:[
                {
                    tittle:"Task 1"
                },
                {
                    tittle:"Task 2"
                }
            ]
        },
        {
            tittle:"Lista 2"
        }
    ]
}

export default BoardData;