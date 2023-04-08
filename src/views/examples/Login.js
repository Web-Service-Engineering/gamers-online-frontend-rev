// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
} from "reactstrap";

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <Col lg="6" md="8">
                <Card className="bg-secondary shadow border-0">
                    {/* <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader> */}
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            Sign in
                        </div>
                        <Form role="form">
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Email" type="email" autoComplete="new-email" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Password" type="password" autoComplete="new-password" />
                                </InputGroup>
                            </FormGroup>
                   
                            <div className="text-center">
                                <Button className="my-4" color="primary" type="button">
                                    Sign in
                                </Button>
                            </div>
                        </Form>
                        <Row className="mt-3">
                            <Col className="text-center">
                                <Link className="text-li ght" to="/auth/register" >
                                  <small>No Account? Register</small>
                                </Link>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default Login;
