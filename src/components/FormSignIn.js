import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import PropTypes from 'prop-types';
import './style.css';

class FormSignIn extends Component {
    render() {
        return (
            <div className="layout">
                <div className="Form">
                    <h2>Sign In</h2>
                    <Form>
                        <FormGroup row>
                            <Label for="Email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="Email" placeholder="Type name of email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="Password" placeholder="Type password" />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={12} className="button">
                                <Button color="primary" style={{"margin-right": "15px"}}>Sign Up</Button>
                                <Button color="primary">Sign In</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

    
    Form.propTypes = {
        children: PropTypes.node,
        inline: PropTypes.bool,
        // Pass in a Component to override default element
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'form'
        innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
        className: PropTypes.string,
        cssModule: PropTypes.object,
    };

    FormGroup.propTypes = {
        children: PropTypes.node,
        // Applied the row class when true, does nothing when false
        row: PropTypes.bool,
        // Applied the form-check class when true, form-group when false
        check: PropTypes.bool,
        inline: PropTypes.bool,
        // Applied the disabled class when the check and disabled props are true, does nothing when false
        disabled: PropTypes.bool,
        // Pass in a Component to override default element
        tag: PropTypes.string, // default: 'div'
        className: PropTypes.string,
        cssModule: PropTypes.object,
    };


export default FormSignIn;