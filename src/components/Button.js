import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

// class ButtonComponent extends Component {
//     render() {
//         return (
//             <div className="layout">
//                 <div className="Button">
//                     <Button color="primary" onClick={this.props.onClick}>
//                         {this.props.children}
//                     </Button>
//                 </div>
//             </div>
//         )
//     }
// }

function ButtonComponent(props) {
    return (
        <div className="layout">
            <div className="Button">
                <Button color="primary" onClick={props.onClick}>
                    {props.children}
                </Button>
            </div>
        </div>
    )
}

Button.propTypes = {
    active: PropTypes.bool,
    'aria-label': PropTypes.string,
    block: PropTypes.bool,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,
    outline: PropTypes.bool,

    // Pass in a Component to override default button element
    // example: react-router Link
    // default: 'button'
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
        PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
        ]))
    ]),

    // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),

    onClick: PropTypes.func,
    size: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,

    // use close prop for BS4 close icon utility
    close: PropTypes.bool,
}

Button.defaultProps = {
    color: 'secondary',
    tag: 'button',
}

export default ButtonComponent;