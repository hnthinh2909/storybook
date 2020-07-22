import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

class FormResetPassword extends Component {
    render () {
        return (
            <div className="layout">
                <div className="Form">
                    <h2>Reset Password</h2>
                    <Form>    
                        <FormGroup row>
                            <Label for="Password" sm={2}>New Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="Password" placeholder="Type new password" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Confirm Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="Password" placeholder="Type new password" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="button">
                            <Button color="primary">
                                Confirm
                            </Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}


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

export default FormResetPassword;