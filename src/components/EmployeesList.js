import React from 'react';
import {listEmployeeAction, deleteEmployeeAction} from '../actions';
import {connect} from 'react-redux';

class EmployeesList extends React.Component {
    componentDidMount() {
        this.props.listEmployeeAction();
    }

    onDelete = (id) => {
        this.props.deleteEmployeeAction(id);
    }

    renderList() {
        return this.props.list.map((emp) => {
            return (
                <div key={emp.id} style={{width: '50%', border: '1px solid black', overflow: 'auto'}}>
                    <div style={{marginBottom: '10px'}}>
                        <div>Name: {emp.name}</div>
                        <div>Email: {emp.email}</div>
                    </div>
                    <button style={{float: 'right'}} onClick={() => this.onDelete(emp.id)}>Delete</button>
                </div>
            );
        });
    }

    render() {
        return (
            <div>{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {list: Object.values(state.employees)}
}

export default connect(
    mapStateToProps,
    {listEmployeeAction, deleteEmployeeAction}
)(EmployeesList);