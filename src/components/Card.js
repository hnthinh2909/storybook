import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, CardGroup
    } from 'reactstrap';
import PropTypes from 'prop-types';

class CardComponent extends Component {
    render() {
        return (
            <div>
                <CardGroup>
                    <Card style={{margin: "15px"}}>
                        <CardImg top width="100%" src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2/380/180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle><b>Product Title</b></CardTitle>
                            <CardText>Description's product</CardText>
                            <Button color="primary" style={{margin: "0px 15px 0px 0px"}}>Add to Cart</Button>
                            <Button color="primary">Edit</Button>
                        </CardBody>
                    </Card>
                    <Card style={{margin: "15px"}}>
                        <CardImg top width="100%" src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2/380/180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle><b>Product Title</b></CardTitle>
                            <CardText>Description's product</CardText>
                            <Button color="primary" style={{margin: "0px 15px 0px 0px"}}>Add to Cart</Button>
                            <Button color="primary">Edit</Button>
                        </CardBody>
                    </Card>     
                    <Card style={{margin: "15px"}}>
                        <CardImg top width="100%" src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2/380/180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle><b>Product Title</b></CardTitle>
                            <CardText>Description's product</CardText>
                            <Button color="primary" style={{margin: "0px 15px 0px 0px"}}>Add to Cart</Button>
                            <Button color="primary">Edit</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}
Card.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    inverse: PropTypes.bool,
    color: PropTypes.string,
    body: PropTypes.bool,
    className: PropTypes.string
    };
    
    CardBody.propTypes = {
        // Pass in a Component to override default element
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        className: PropTypes.string
    };
    
    CardGroup.propTypes = {
        // Pass in a Component to override default element
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        className: PropTypes.string
    };
    

    CardImg.propTypes = {
        // Pass in a Component to override default element
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        className: PropTypes.string,
        // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
        top: PropTypes.bool,
        bottom: PropTypes.bool
    };
    
    CardText.propTypes = {
        // Pass in a Component to override default element
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        className: PropTypes.string
    };
    
    CardTitle.propTypes = {
        // Pass in a Component to override default element
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        className: PropTypes.string
    };
export default CardComponent;