import { useFetchUser } from '@/entities';
import { Header } from '@/widgets';

function App() {
    useFetchUser();
    return <Header />;
}

export default App;
