// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col } from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import React, { useState, useContext } from "react";
import authService from "services/authService";
import ProfileService from "services/ProfileService";
import UserProfileContext from "services/UserProfileContext";

import { Link, useHistory } from "react-router-dom";

const ProfileFirstTime = (props) => {
    const [userName, setUserName] = useState("");
    const [skill, setSkill] = useState(1);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("Atlanta");
    const [state, setState] = useState("GA");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");

    const nav = useHistory();

    const { setFirstNameContext, setLastNameContext } = useContext(UserProfileContext);

    const handleSubmit = (e) => {
        try {
            const profileData = {
                account_id: authService.getUserId().toString(),
                first_name: firstName,
                last_name: lastName,
                friendly_name: userName,
                city: city,
                state: state,
                date_of_birth: dob,
                skillset_id: skill.toString(),
                gender: gender,
                achiever_pct: "",
                explorer_pct: "",
                killer_pct: "",
                socializer_pct: "",
                id: "",
            };
            //props.onProfileSuccess(authService.getToken());

            //console.log(profileData);
            const response = ProfileService.createProfile(profileData);
            //console.log(response);
            nav.push("/onboarding/test-register");
        } catch (error) {
            console.log(error);
        }
    };

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
                                <Form onSubmit={handleSubmit}>
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
                                                        id="input-username"
                                                        placeholder="Username"
                                                        type="text"
                                                        required
                                                        onChange={(e) => {
                                                            setUserName(e.target.value);
                                                        }}
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
                                                        id="input-skill"
                                                        placeholder="Beginner"
                                                        type="select"
                                                        value={skill}
                                                        required
                                                        onChange={(e) => {
                                                            setSkill(e.target.value);
                                                        }}>
                                                        <option value="">Select a Skill</option>
                                                        <option value="1">Beginner</option>
                                                        <option value="2">Intermediate</option>
                                                        <option value="3">Expert</option>
                                                    </Input>
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
                                                        id="input-first-name"
                                                        placeholder="First name"
                                                        type="text"
                                                        required
                                                        onChange={(e) => {
                                                            setFirstName(e.target.value);
                                                            setFirstNameContext(e.target.value);
                                                        }}
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
                                                        id="input-last-name"
                                                        placeholder="Last Name"
                                                        type="text"
                                                        required
                                                        onChange={(e) => {
                                                            setLastName(e.target.value);
                                                            setLastNameContext(e.target.value);
                                                        }}
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
                                                        defaultValue="Atlanta"
                                                        id="input-city"
                                                        placeholder="City"
                                                        type="text"
                                                        required
                                                        onChange={(e) => {
                                                            setCity(e.target.value);
                                                        }}
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
                                                        id="input-state"
                                                        placeholder="State"
                                                        type="select"
                                                        required
                                                        onChange={(e) => {
                                                            setState(e.target.value);
                                                        }}>
                                                        <option value="">Select a state...</option>
                                                        {USStates.map((state) => (
                                                            <option key={state} value={state}>
                                                                {state}
                                                            </option>
                                                        ))}
                                                    </Input>
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
                                                        id="input-dob"
                                                        placeholder="Date Of Birth"
                                                        type="date"
                                                        required
                                                        onChange={(e) => {
                                                            setDob(e.target.value);
                                                        }}
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
                                                        id="input-gender"
                                                        placeholder="Gender"
                                                        type="select"
                                                        required
                                                        onChange={(e) => {
                                                            setGender(e.target.value);
                                                        }}>
                                                        <option value="">Select a gender</option>
                                                        <option value="M">Male</option>
                                                        <option value="F">Female</option>
                                                        <option value="O">Other</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="text-center">
                                        <Button className="my-4" color="warning" type="submit">
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

const USStates = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
];

export default ProfileFirstTime;
