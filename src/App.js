import React from "react";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import PrivateRoute from "./utils/privateRoute";
import { AuthProvider } from "./context/authContext";
import Signup from "./pages/signup";
import Pharmacy from "./pages/pharmacy";
import Doctor from "./pages/doctor";
import test from "./pages/test";
const App = () => {
    return (
        <div className="">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route exact path="/" element={<PrivateRoute/>}>
                            <Route exact path="/home" Component={HomePage}/>
                            <Route exact path="/doctor" Component={Doctor}/>
                            <Route exact path="/pharmacy" Component={Pharmacy}/>
                        </Route>
                        <Route exact path="/login" Component={LoginPage} />
                        <Route path="/signup" Component={Signup} />
                        <Route path="/test" Component={test} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    )
};

export default App;
