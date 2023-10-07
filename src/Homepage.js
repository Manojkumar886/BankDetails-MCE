import 'bootstrap/dist/css/bootstrap.min.css'

import {Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from 'react-bootstrap'
export let Homepage=()=>
{
    return(
        <>
            <Navbar bg='primary' expand='lg'>
                <NavbarBrand>BANK</NavbarBrand>
                <NavbarToggle></NavbarToggle>
                <NavbarCollapse>
                    <Nav>
                        <Nav.Link href='/create'>Registration</Nav.Link>
                        <Nav.Link href='/listall'>ListallCustomerDetails</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    );

}