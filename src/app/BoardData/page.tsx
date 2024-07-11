import AsideProjectsComponent from "@/components/AsideProjectsComponent";
import BoardComponent from "@/components/BoardComponent";
import HeaderComponent from "@/components/HeaderComponent";
import projectType from "@/types/project";

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
    users: []
}

export default BoardData;