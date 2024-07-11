import projectType from '@/types/project';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AppsIcon from '@mui/icons-material/Apps';
import Style from "./AsideProjectsComponent.module.css"

function AsideProjectsComponent() {
    return (
        <aside className={Style.asideComponent} >
            <div className={Style.contentAddButton}>
                <AddBoxIcon fontSize='large' className={Style.buttonAddProject} />
            </div>
            <div className='flex-list pt-4'>
                {allProjects.map((Project: projectType, key) =>
                    <ProjectItem select={Project.name === "Project 1"} text={Project.name} key={key} />
                )}
            </div>
        </aside>
    );
}
const ProjectItem = ({ text, select }: { text: String, select: Boolean }) => (
    <div className={`${Style.projectItem} ${select && "primeColor"}`}>
        <AppsIcon />
        <h3>{text}</h3>
    </div>
)

const allProjects: projectType[] = [
    {
        name: "Project 1",
        users: []
    },
    {
        name: "Project 2",
        users: []
    },
    {
        name: "Project 3",
        users: []
    },
]
export default AsideProjectsComponent;