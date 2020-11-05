import React from 'react';
import {connect} from 'react-redux';
import {addEmployeeAction} from '../actions';

class AddEmployee extends React.Component {
    state = {name: "", email: ""}

    onAddEmployee = () => {
        this.props.addEmployeeAction(this.state);
    }

    renderForm = () => {
        return (
            <div>
                <div><span>Name: </span><input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/></div>
                <div><span>Email: </span><input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/></div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h3>Add Employee</h3>
                {this.renderForm()}
                <button onClick={this.onAddEmployee}>Add</button>
            </div>
        );
    }
}

export default connect(null, {addEmployeeAction})(AddEmployee);