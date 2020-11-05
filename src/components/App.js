import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import EmployeesList from './EmployeesList';
import AddEmployee from './AddEmployee';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact>
                <EmployeesList/>
            </Route>
            <Route path="/addemp">
                <AddEmployee/>
            </Route>
        </BrowserRouter>
    );
}

export default App;