import React from 'react';
import Login from './Login';
import Logout from './Logout';
import TaskList from './TaskList';
import AuthViewer from './AuthViewer';

function App() {
    return (
        <div className='App'>
            <AuthViewer reverse={true}>
                <Login />
            </AuthViewer>
            <AuthViewer>
                <Logout />
                <TaskList />
            </AuthViewer>
        </div>
    );
}

export default App;
