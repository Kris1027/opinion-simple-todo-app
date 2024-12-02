import Container from './components/container/container';
import Heading from './components/heading/heading';
import TodayDate from './components/today-date/today-date';

const Todo = () => {
    return (
        <Container>
            <header>
                <Heading />
                <TodayDate />
            </header>
        </Container>
    );
};

export default Todo;
