
import logo from './img/logo.jpeg';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import {
  Collapse,
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
  NavbarText
} from 'reactstrap';

const menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className={styles.navbar} expand="md">
        <NavbarBrand href="/" className={styles.logo}><Image   src={logo} alt="Vercel Logo"  />
 </NavbarBrand>
 <NavbarToggler className={styles.togglericon} onClick={toggle} />
        <Collapse  isOpen={isOpen} navbar>
          <Nav  className="mr-auto" navbar>
            <NavItem className={styles.NavLink}>
              <NavLink  className={styles.NavLink} href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className={styles.NavLink} href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={styles.NavLink}>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className={styles.NavLink}>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default menu;