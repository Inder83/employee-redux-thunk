import React from 'react';
import {listEmployeeAction} from '../actions';
import {connect} from 'react-redux';

class EmployeesList extends React.Component {
    componentDidMount() {
        this.props.listEmployeeAction();
    }

    renderList() {
        return this.props.list.map((emp) => {
            return (
                <div key={emp.id} style={{border: '1px solid black', marginBottom: '10px'}}>
                    <div>Name: {emp.name}</div>
                    <div>Email: {emp.email}</div>
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
    {listEmployeeAction}
)(EmployeesList);