import React from "react";
import {
    HashRouter,
    Switch,
    Route,
} from 'react-router-dom';
//import Navigation from "./js/Components/page_navigation/Navigation";
import Home from "./js/Components/Home";
import Form from "./js/Components/form/Form";
import NotFound from "./js/Components/NotFound";
//import Footer from "./js/Components/page_footer/Footer";
//import initMap from "./js/Components/page_contact/Contact";
//import { library } from '@fortawesome/fontawesome-svg-core'
//import "./scss/App.scss"


export default function App() {
    return (
        <>
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/form">
                            <Form/>
                        </Route>
                        <Route exact path="/" >
                            <Home/>
                        </Route>
                        <Route>
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            </HashRouter>
        </>
    );
};


