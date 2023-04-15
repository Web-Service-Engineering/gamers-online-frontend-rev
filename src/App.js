// src/App.js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Onboarding from "layouts/Onboarding";
import Login from "components/Footers/AuthFooter";
import Register from "views/examples/Register";
import ProfileFirstTime from "views/examples/ProfileFirstTime";
import UserContext from "services/UserContext";
import ProtectedRoute from "services/ProtectedRoute";
import authService from "services/authService";
import ProfileService from "services/ProfileService";
import { Progress } from "reactstrap";

const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const nav = useHistory();

    const onLoginSuccess = (token) => {
        const decoded = jwt_decode(token);
        setUser(decoded);
        //const responseData = ProfileService.getProfileById(authService.getUserId());
    };

    const onProfileSuccess = (token) => {
        const decoded = jwt_decode(token);
        setUser(decoded);
        //const responseData = ProfileService.getProfileById(authService.getUserId());
    };

    useEffect(() => {
        const token = authService.getToken();
        if (token) {
            const decoded = jwt_decode(token);
            setUser(decoded);
        }
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Progress animated value={100} />
            </div>
        );
    }

    return (
        <UserContext.Provider value={user}>
            <Switch>
                <Route path="/auth" render={(props) => <AuthLayout {...props} onLoginSuccess={onLoginSuccess} />} />
                <ProtectedRoute path="/admin" component={AdminLayout} />
                <ProtectedRoute path="/onboarding" component={Onboarding} />
                <Redirect from="/" to="/admin/index" />
            </Switch>
        </UserContext.Provider>
    );
};

export default App;
