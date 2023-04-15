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
import { useState } from "react";
import authService from "services/authService";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.register(email, password).then((response) => {
                if (response.data.message === "Successfully registered."){
                    setError(response.data.message+ " Please Login");
                }
                else{
                    setError(response.data.message);
                }  
            });
        } catch (err) {
            setError("Account already exists. Please Log in.");
        }
    };
    return (
        <>
            <Col lg="6" md="8">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">Sign up</div>
                        <Form role="form" onSubmit={handleSubmit}>
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        autoComplete="new-email"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        required
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        autoComplete="new-password"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        required
                                    />
                                </InputGroup>
                            </FormGroup>
                            {error !== "" && (
                                <Row className="mt-3">
                                    <Col className="text-center">
                                        <p className="text-li ght text-red">{error}</p>
                                    </Col>
                                </Row>
                            )}
                            <div className="text-center">
                                <Button className="my-4" color="warning" type="submit">
                                    Create account
                                </Button>
                            </div>
                        </Form>
                        <Row className="mt-3">
                            <Col className="text-center">
                                <Link className="text-li ght" to="/auth/login">
                                    <small>Existing Account? Sign In</small>
                                </Link>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default Register;
