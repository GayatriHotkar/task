import React from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
export default class task extends React.Component {
    state = {
        users: [],
        currentPage: 1,
        todosPerPage: 6
    };
    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                this.setState({
                    users: res.data.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleClick = event => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    };

    render() {
        const { users, currentPage, todosPerPage } = this.state;
       
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(users.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }


        
        const renderPageNumbers = pageNumbers.map((number, index) => {
            return (
                <li key={index} id={number} onClick={this.handleClick}>
                    {number}
                </li>
            );
        });

        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>Images</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        </tr>
                        {users.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.email}</td>
                                    <td>{a.first_name}</td>
                                    <td>{a.last_name}</td>
                                    <td>
                                    
                                    <img
          src= {a.avatar}
        /></td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>






                <ul id="page-numbers">{renderPageNumbers}</ul>
            </div>
        );
    }
}


