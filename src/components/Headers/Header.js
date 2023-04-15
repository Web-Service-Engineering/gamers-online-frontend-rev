// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";
import ProfileService from "services/ProfileService";
import authService from "services/authService";

const Header = () => {
    const [achiever, setAchiever] = useState("0.0");
    const [explorer, setExplorer] = useState("0.0");
    const [killer, setKiller] = useState("0.0");
    const [socializer, setSocializer] = useState("0.0");

    const convertPercentage = (numberInString) => {
        const number = parseFloat(numberInString) * 100;
        return number.toFixed(2);
    };

    useEffect(() => {
        const response = ProfileService.getProfileById(authService.getUserId()).then((response) => {
            setAchiever(convertPercentage(response.data.achiever_pct));
            setExplorer(convertPercentage(response.data.explorer_pct));
            setKiller(convertPercentage(response.data.killer_pct));
            setSocializer(convertPercentage(response.data.socializer_pct));
        });
    }, []);

    return (
        <>
            <div className="header bg-gradient-warning pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <div className="header-body">
                        {/* Card stats */}
                        <Row>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0">
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                                    Achiever
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">{achiever}</span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                                    <i className="fas fa-percent" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0">
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                                    Explorer
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">{explorer}</span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                                    <i className="fas fa-percent" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0">
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                                    Killer
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">{killer}</span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                                    <i className="fas fa-percent" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0">
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                                    Socializer
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">{socializer}</span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                                    <i className="fas fa-percent" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Header;
