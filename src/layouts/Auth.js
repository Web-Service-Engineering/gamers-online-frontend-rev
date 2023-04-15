import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import Login from "views/examples/Login";
import Register from "views/examples/Register";

import routes from "routes.js";

const Auth = (props) => {
    const mainContent = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
        document.body.classList.add("bg-default");
        return () => {
            document.body.classList.remove("bg-default");
        };
    }, []);
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/auth") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={(routeProps) => {
                            if (prop.name === "Login") {
                                return <prop.component {...routeProps} onLoginSuccess={props.onLoginSuccess} />;
                            } else if (prop.name === "New Profile") {
                                return <prop.component {...routeProps} onProfileSuccess={props.onProfileSuccess} />;
                            } else {
                                return <prop.component {...routeProps} />;
                            }
                        }}
                        // component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    return (
        <>
            <div className="main-content" ref={mainContent}>
                {/* <AuthNavbar /> */}
                <div className="header bg-gradient-warning py-7 py-lg-8">
                    <Container>
                        <div className="header-body text-center mb-7">
                            <Row className="justify-content-center">
                                <Col lg="5" md="6">
                                    <h1 className="text-white">Welcome To Gamers Online Matching</h1>
                                    <p className="text-lead text-light">Find players similar to you online</p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0">
                            <polygon className="fill-default" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                </div>
                {/* Page content */}
                <Container className="mt--8 pb-5">
                    <Row className="justify-content-center">
                        {/* <Switch>
                            {getRoutes(routes)}
                            <Redirect from="/auth" to="/auth/login" />
                        </Switch> */}
                        <Switch>
                            <Route
                                path="/auth/login"
                                render={(routeProps) => <Login {...routeProps} onLoginSuccess={props.onLoginSuccess} />}
                            />
                            {/* <Route path="/auth/login" component={Login} onLoginSuccess={props.onLoginSuccess} /> */}
                            <Route path="/auth/register" component={Register} />
                            {/* <Route path="/auth/login" component={Login} onLoginSuccess={props.onLoginSuccess}/> */}
                            {/* {getRoutes(routes)} */}
                            <Redirect from="/auth" to="/auth/login" />
                        </Switch>
                    </Row>
                </Container>
            </div>
            {/* <AuthFooter /> */}
        </>
    );
};

export default Auth;