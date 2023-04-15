import { useState, useEffect } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
//import Chart from "chart.js";
// react plugin used to create charts
//import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import { chartOptions, parseOptions, chartExample1, chartExample2 } from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");

    // if (window.Chart) {
    //     parseOptions(Chart, chartOptions());
    // }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data("data" + index);
    };
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Like Minded Players</h3>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Player Username</th>
                                        <th scope="col">Achiever</th>
                                        <th scope="col">Explorer </th>
                                        <th scope="col">Killer</th>
                                        <th scope="col">Socializer</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Test Name</th>
                                        <td>35%</td>
                                        <td>5%</td>
                                        <td>46,53%</td>
                                        <td>46,53%</td>
                                        <td>
                                            {/* <Button
                                                color="primary"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                size="sm">
                                                Add Friend
                                            </Button> */}
                                            <Button
                                                color="danger"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                size="sm">
                                                Remove Friend
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;
