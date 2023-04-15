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

import React, { useState } from "react";
import authService from "services/authService";

import { Link, useHistory } from "react-router-dom";

import ProfileService from "services/ProfileService";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const nav = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.login(email, password).then((response) => {
                setError(response.data.message);

                if (response.data.status == "fail") {
                    setError(response.data.message);
                } else {
                    const Authorization = response.data.Authorization;
                    authService.setToken(Authorization);
                    //console.log(authService.getUserId());
                    props.onLoginSuccess(Authorization);
                    setError("");
                    handleRedirect(authService.getUserId());
                }
            });

            // Redirect to the desired page after successful login, e.g. /admin/index
        } catch (err) {
            setError(err.message);
        }
    };

    const handleRedirect = async (user_id) => {
        const responseData = await ProfileService.getProfileById(user_id);
        if (responseData.data.account_id === null) {
            nav.push("/onboarding/profile-register");
        } else {
            nav.push("/");
        }
    };

    return (
        <>
            <Col lg="6" md="8">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">Sign in</div>
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
                                    Sign in
                                </Button>
                            </div>
                        </Form>
                        <Row className="mt-3">
                            <Col className="text-center">
                                <Link className="text-li ght" to="/auth/register">
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
