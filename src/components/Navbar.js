import React, { useState } from 'react';
import {  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText} from 'reactstrap';
import PropTypes from 'prop-types';


import './style.css';

    // const NavbarComponent = (props) => {
    //         const [isOpen, setIsOpen] = useState(false);
        
    //         const toggle = () => setIsOpen(!isOpen);
        
    //         return (
    //         <div>
    //             <Navbar color="light" light expand="md">
    //             <NavbarBrand href="/">reactstrap</NavbarBrand>
    //             <NavbarToggler onClick={toggle} />
    //             <Collapse isOpen={isOpen} navbar>
    //                 <Nav className="mr-auto" navbar>
    //                     <NavItem>
    //                         <NavLink href="#">Library</NavLink>
    //                     </NavItem>
    //                     <NavItem>
    //                         <NavLink href="#">Products</NavLink>
    //                     </NavItem>
    //                     <NavItem>
    //                         <NavLink href="#">Cart</NavLink>
    //                     </NavItem>
    //                 </Nav>
    //                 <NavbarText>
    //                 <UncontrolledDropdown nav inNavbar>
    //                     <DropdownToggle nav caret>
    //                     Hi, Admin
    //                     </DropdownToggle>
    //                     <DropdownMenu right>
    //                         <DropdownItem>
    //                             Profile
    //                         </DropdownItem>
    //                         <DropdownItem>
    //                             Users
    //                         </DropdownItem>
    //                         <DropdownItem>
    //                             Transactions
    //                         </DropdownItem>
    //                         <DropdownItem divider />                            
    //                         <DropdownItem>
    //                             Log Out
    //                         </DropdownItem>
    //                     </DropdownMenu>
    //                 </UncontrolledDropdown>
    //                 </NavbarText>
    //             </Collapse>
    //             </Navbar>
    //         </div>
    //         );
    //     }

function NavbarComponent() {
    const [isOpen, setIsOpen] = useState(false);
        
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Library</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Cart</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Hi, Admin
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Profile
                        </DropdownItem>
                        <DropdownItem>
                            Users
                        </DropdownItem>
                        <DropdownItem>
                            Transactions
                        </DropdownItem>
                        <DropdownItem divider />                            
                        <DropdownItem>
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </NavbarText>
            </Collapse>
            </Navbar>
        </div>
        );
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarText.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

export default NavbarComponent;