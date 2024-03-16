import { Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
    return (
        <div className={classes.app}>
            <Sidebar />
            <div className={classes.content}>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
