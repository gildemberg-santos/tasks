import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    async loadTasks() {
        // this.props.loadTasks()
        alert('load')
    }
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Brand>
                        <FontAwesomeIcon icon={faCheckCircle} size="lg" /> Task Finisher
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default Header;