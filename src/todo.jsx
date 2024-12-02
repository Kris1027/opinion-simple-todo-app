import AddButton from './components/add-button/add-button';
import Container from './components/container/container';
import Heading from './components/heading/heading';
import TaskList from './components/task-list/task-list';
import TodayDate from './components/today-date/today-date';

const Todo = () => {
    const tasks = [
        { id: 1, text: 'Zrobić obiad', complete: false },
        { id: 2, text: 'Wyrzucić śmieci', complete: true },
        { id: 3, text: 'Wyjść z psem na długi spacer', complete: false },
    ];

    return (
        <Container>
            <header>
                <Heading />
                <TodayDate />
            </header>
            <main>
                <TaskList tasks={tasks} />
                <AddButton />
            </main>
        </Container>
    );
};

export default Todo;
