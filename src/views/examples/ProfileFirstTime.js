// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col } from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const ProfileFirstTime = () => {
    return (
        <>
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Fill in your profile Information</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">User information</h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-username">
                                                        Username
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="lucky.jesse"
                                                        id="input-username"
                                                        placeholder="Username"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-skill">
                                                        Skill
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="lucky.jesse"
                                                        id="input-username"
                                                        placeholder="Username"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-first-name">
                                                        First name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="Lucky"
                                                        id="input-first-name"
                                                        placeholder="First name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-last-name">
                                                        Last name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="Jesse"
                                                        id="input-last-name"
                                                        placeholder="Last name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <hr className="my-4" />
                                    {/* Address */}
                                    <h6 className="heading-small text-muted mb-4">Contact information</h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-city">
                                                        City
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="New York"
                                                        id="input-city"
                                                        placeholder="City"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-country">
                                                        State
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="GA"
                                                        id="input-country"
                                                        placeholder="Country"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-country">
                                                        Date Of Birth
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-postal-code"
                                                        placeholder="Date Of Birth"
                                                        type="date"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-country">
                                                        Gender
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-postal-code"
                                                        placeholder="Gender"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="text-center">
                                        <Button className="my-4" color="primary" type="button">
                                            Continue
                                        </Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProfileFirstTime;
