import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Switch, Route, Redirect} from 'react-router-dom';
import Page404 from "./pages/errors/Page404";
import Home from "./pages/Home";
import Header from "./components/Header";
import Youtube from "./pages/Youtube";
import Unsplash from "./pages/Unsplash";


function App() {

    useEffect(() => {

    }, []);

    return (
        <Container>
            <Header/>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/unsplash" component={Unsplash}/>
                <Route exact path="/youtube" component={Youtube}/>
                <Redirect exact from='/' to='/home'/>
                <Route component={Page404}/>

            </Switch>
        </Container>
    )
}

const Container = styled.div`
    background:#f3f6f7;
    min-height: 100vh;
`;

export default App;
