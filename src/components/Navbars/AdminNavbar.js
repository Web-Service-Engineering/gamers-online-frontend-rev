import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import UserProfileContext from "services/UserProfileContext";
// reactstrap components
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    Navbar,
    Nav,
    Container,
    Media,
} from "reactstrap";

import authService from "services/authService";

const AdminNavbar = (props) => {
    const nav = useHistory();

    const { firstNameContext, lastNameContext } = useContext(UserProfileContext);

    const handleLogout = (e) => {
        authService.logout();
        nav.push("/auth/login");
    };
    return (
        <>
            <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
                <Container fluid>
                    <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/">
                        {props.brandText}
                    </Link>
                    <Nav className="align-items-center d-none d-md-flex" navbar>
                        <UncontrolledDropdown nav>
                            <DropdownToggle className="pr-0" nav>
                                <Media className="align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        <img
                                        // alt="..."
                                        // src={require("../../assets/img/theme/team-4-800x800.jpg")}
                                        />
                                    </span>
                                    <Media className="ml-2 d-none d-lg-block">
                                        <span className="mb-0 text-sm font-weight-bold">{firstNameContext} {lastNameContext}</span>
                                    </Media>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem className="noti-title" header tag="div">
                                    <h6 className="text-overflow m-0">Welcome!</h6>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-single-02" />
                                    <span>My profile</span>
                                </DropdownItem>
       
                                <DropdownItem divider />
                                <DropdownItem href="" onClick={handleLogout}>
                                    <i className="ni ni-user-run" />
                                    <span>Logout</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default AdminNavbar;