import React, { Component } from 'react'
import AddClerkContainer from '../components/AddClerkContainer';
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'
import FindClerkContainer from '../components/FindClerkContainer';



export default class Clerks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: false,
            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
            }

        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar = () => {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen,
        })
    }

    render() {
        return (
            <div style={this.state.style}>
                <AdminSidebar isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setAdminID={this.props.setAdminID} adminID={this.props.adminID} />
                <AdminNavbar toggleSidebar={this.toggleSidebar} setAdminID={this.props.setAdminID} adminID={this.props.adminID} />
                <FindClerkContainer />
                <AddClerkContainer />
            </div>
        )
    }
}
