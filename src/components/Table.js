import React from 'react';
import { Table } from 'reactstrap';

import PropTypes from 'prop-types';
import './style.css';

const TableComponent = (props) => {
    return (
        <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Admin</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td><img src="https://loremflickr.com/40/40"/></td>
                <td>Mark</td>
                <td>Yes</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td><img src="https://loremflickr.com/40/40"/></td>
                <td>Jacob</td>
                <td>No</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td><img src="https://loremflickr.com/40/40"/></td>
                <td>Larry</td>
                <td>No</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    );
}

Table.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    size: PropTypes.string,
    bordered: PropTypes.bool,
    borderless: PropTypes.bool,
    striped: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    responsive: PropTypes.bool,
    // Custom ref handler that will be assigned to the "ref" of the inner <table> element
    innerRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.object
    ])
    };

export default TableComponent;