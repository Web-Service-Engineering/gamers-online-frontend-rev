// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Col,
    Button,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <Col>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <h3 className="mb-0">Your Friends</h3>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={require("../../assets/img/theme/bootstrap.jpg")}
                                                        />
                                                    </a>
                                                    <Media>
                                                        <span className="mb-0 text-sm">Friend 1</span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-warning" />
                                                    pending
                                                </Badge>
                                            </td>
                                            <td className="text-right">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                        className="btn-icon-only text-light"
                                                        href="#pablo"
                                                        role="button"
                                                        size="sm"
                                                        color=""
                                                        onClick={(e) => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-v" />
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                                            Remove friend
                                                        </DropdownItem>
                                                        <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                                            Add To Group
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <CardFooter className="py-4">
                                    <nav aria-label="...">
                                        <Pagination
                                            className="pagination justify-content-end mb-0"
                                            listClassName="justify-content-end mb-0">
                                            <PaginationItem className="disabled">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                    tabIndex="-1">
                                                    <i className="fas fa-angle-left" />
                                                    <span className="sr-only">Previous</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem className="active">
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    2 <span className="sr-only">(current)</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <i className="fas fa-angle-right" />
                                                    <span className="sr-only">Next</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>
                                </CardFooter>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div className="col">
                            <Card className="bg-default shadow">
                                <CardHeader className="bg-transparent border-0">
                                    <Row>
                                        <Col>
                                            <h3 className="text-white mb-0">Your Groups</h3>
                                        </Col>
                                        <Col>
                                            <Button
                                                color="primary"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                size="sm">
                                                Create Group
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-dark table-flush" responsive>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Group Name</th>
                                            <th scope="col">Number of Users</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={require("../../assets/img/theme/bootstrap.jpg")}
                                                        />
                                                    </a>
                                                    <Media>
                                                        <span className="mb-0 text-sm">Group 1</span>
                                                    </Media>
                                                </Media>
                                            </th>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">60</span>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                        className="btn-icon-only text-light"
                                                        href="#pablo"
                                                        role="button"
                                                        size="sm"
                                                        color=""
                                                        onClick={(e) => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-v" />
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                                            Quit Group
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <CardFooter className="py-4 bg-default">
                                    <nav aria-label="...">
                                        <Pagination
                                            className="pagination justify-content-end mb-0"
                                            listClassName="justify-content-end mb-0">
                                            <PaginationItem className="disabled">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                    tabIndex="-1">
                                                    <i className="fas fa-angle-left" />
                                                    <span className="sr-only">Previous</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem className="active">
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    2 <span className="sr-only">(current)</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <i className="fas fa-angle-right" />
                                                    <span className="sr-only">Next</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>
                                </CardFooter>
                            </Card>
                        </div>
                    </Col>
                </Row>
                {/* Dark table */}
                <Row className="mt-5"></Row>
            </Container>
        </>
    );
};

export default Tables;
