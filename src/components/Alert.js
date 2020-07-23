import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

import './style.css';
import { render } from '@testing-library/react';

// class AlertComponent extends Component {
//     render() {
//         return (
//             <div className="layout">
//                 <div className="Alert">
//                     <Alert color="danger">
//                         Your password is wrong
//                     </Alert>
//                     <Alert color="danger">
//                         Your email is wrong
//                     </Alert>
//                     <Alert color="danger">
//                         Your email, password is empty
//                     </Alert>
//                 </div>
//             </div>
//         )
//     }
// }

function AlertComponent() {
        return (
            <div className="layout">
                <div className="Alert">
                    <Alert color="danger">
                        Your password is wrong
                    </Alert>
                    <Alert color="danger">
                        Your email is wrong
                    </Alert>
                    <Alert color="danger">
                        Your email, password is empty
                    </Alert>
                </div>
            </div>
        )
}

AlertComponent.propTypes = {
    className: PropTypes.string,
    closeClassName: PropTypes.string,
    color: PropTypes.string, // default: 'success'
    isOpen: PropTypes.bool,  // default: true
    toggle: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fade: PropTypes.bool, // default: true
    // Controls the transition of the alert fading in and out
    // See Fade for more details
}

export default AlertComponent;