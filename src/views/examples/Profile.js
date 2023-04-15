// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col } from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useState, useEffect, useContext } from "react";
import ProfileService from "services/ProfileService";
import authService from "services/authService";
import UserProfileContext from "services/UserProfileContext";

const Profile = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [skill, setSkill] = useState(1);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [sucessMessage, setSuccessMessage] = useState("");
    const [profileId, setProfileID] = useState("0");

    const convertSkillToName = (skillId) => {
        switch (skillId) {
            case "1":
                return "Beginner";
                break;
            case "2":
                return "Intermediate";
                break;
            case "3":
                return "Expert";
                break;

            default:
                break;
        }
    };
    const convertGenderToName = (genderLetter) => {
        switch (genderLetter) {
            case "M":
                return "Male";
                break;
            case "F":
                return "Female";
                break;
            case "O":
                return "Other";
                break;

            default:
                break;
        }
    };

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
                id: profileId,
            };
            //props.onProfileSuccess(authService.getToken());

            //console.log(profileData);
            const response = ProfileService.updateProfile(profileData).then((response) => {
                setSuccessMessage(response.data.message);
            });
            //console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const responseAccount = ProfileService.getAccountById(authService.getUserId()).then((response) => {
            setEmail(response.data.email);
            setPassword(response.data.password);
        });

        const responseData = ProfileService.getProfileById(authService.getUserId()).then((response) => {
            setUserName(response.data.friendly_name);
            setFirstName(response.data.first_name);
            setLastName(response.data.last_name);
            setSkill(response.data.skillset_id);
            setCity(response.data.city);
            setState(response.data.state);
            setDob(response.data.date_of_birth);
            setGender(response.data.gender);
            setProfileID(response.data.id);
            setFirstNameContext(response.data.first_name);
            setLastNameContext(response.data.last_name);
        });
    }, []);

    return (
        <>
            <UserHeader firstName={firstName} lastName={lastName} />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">My account</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">User information</h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-email">
                                                        Email address
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-email"
                                                        placeholder="jesse@example.com"
                                                        type="email"
                                                        defaultValue={email}
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-password">
                                                        Password
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-password"
                                                        placeholder="jesse@example.com"
                                                        type="password"
                                                        defaultValue={password}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-skill">
                                                        Skill
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-skill"
                                                        placeholder="Beginner"
                                                        defaultValue={convertSkillToName(skill)}
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
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-username">
                                                        Username
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue={userName}
                                                        id="input-username"
                                                        placeholder="Username"
                                                        type="text"
                                                        onChange={(e) => {
                                                            setUserName(e.target.value);
                                                        }}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-first-name">
                                                        First name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue={firstName}
                                                        id="input-first-name"
                                                        placeholder="First name"
                                                        type="text"
                                                        onChange={(e) => {
                                                            setFirstName(e.target.value);
                                                            setFirstNameContext(e.target.value);
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="input-last-name">
                                                        Last name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue={lastName}
                                                        id="input-last-name"
                                                        placeholder="Last name"
                                                        type="text"
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
                                                        defaultValue={city}
                                                        id="input-city"
                                                        placeholder="City"
                                                        type="text"
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
                                                        defaultValue={state}
                                                        value={state}
                                                        id="input-state"
                                                        placeholder="Country"
                                                        type="select"
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
                                                        defaultValue={dob}
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
                                                        value={gender}
                                                        defaultValue={convertGenderToName(gender)}
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
                                    {sucessMessage !== "" && (
                                        <Row className="mt-3">
                                            <Col className="text-center">
                                                <p className="text-li ght text-green">{sucessMessage}</p>
                                            </Col>
                                        </Row>
                                    )}
                                    <div className="text-center">
                                        <Button className="my-4" color="warning" type="submit">
                                            Edit Profile
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

export default Profile;
