import React from 'react';
import {Route, Router} from 'react-router-dom';
import history from "../History";
import EmployeesList from './EmployeesList';
import AddEmployee from './AddEmployee';
import Header from "./Header";

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header/>
                <Route path="/" exact>
                    <EmployeesList/>
                </Route>
                <Route path="/addemp">
                    <AddEmployee/>
                </Route>
            </Router>
        </div>
    );
}

export default App;