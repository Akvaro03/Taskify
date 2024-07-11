import AssessmentIcon from '@mui/icons-material/Assessment';

function HeaderComponent() {
    return (
        <header className='flex justify-between w-screen px-20 py-5 h-16'>
            <article className='flex items-center'>
                <AssessmentIcon fontSize='large' color='error' />
                <h1 className='text-2xl px-2'>
                    Taskify
                </h1>
            </article>
            <article className='flex'>
                <h3 className='px-5 text-sm'>Boards</h3>
                <h3 className='px-5 text-sm'>Calendar</h3>
                <h3 className='px-5 text-sm'>Team</h3>
                <h3 className='px-5 text-sm'>Setting</h3>
            </article>
        </header>
    );
}

export default HeaderComponent;