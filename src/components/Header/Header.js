import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import SideMenu from "./SideMenu";
import Nav from "./Nav";
import styled from "styled-components";
import {appActions} from "../../redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import cn from 'classnames';
import {Action} from "../../redux/app/redux";
import {ContentContainer} from "../layout/Layout.Styled";

function Header() {

    const {app} = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <Container className={cn({openSideMenu: app.openSideMenu})}>
            <ContentContainer className={'container'}>
                <Logo>Logo</Logo>
                <Nav/>
                <Button onClick={() => dispatch(Action.Creators.handlesidemenu(true))}>메뉴</Button>
                <SideMenu/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    height: 76px;
    background:#ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1500 ;
    .container{
    display: flex;
    }
`;

const Logo = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
`;

const Button = styled.div`
    color:#333333;
    cursor:pointer;
    padding: 20px;
    display: flex;
    align-items:center;
`;


export default withRouter(Header);

