import React, { Component } from 'react';
import styled from 'styled-components';
import {Link, withRouter } from 'react-router-dom';

const HeaderBox = styled.header`
    /* position: fixed;
    z-index: 999; */
    width:100%;
`;

const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
    background-color: #eaeaea;
    height: inherit;
`;

const HeaderClass = styled.div`

`;

const List = styled.ul`
    overflow:hidden;
    text-align:center;
`;
const Item = styled.li`
    float:left;
    width:12.5%;
    padding: 1rem;
    /* border-bottom: 5px solid ${props => props.current ? "red" : "transparent"}; */
    a{
        transform: ${props => props.current ? "scale(1.25)" : "scale(1.0)"};
    }
`;

const SLink = styled(Link)`
    transition: all 0.3s;
    color: var(--grey);
    display:block;
    margin: 2rem 0;
   &:hover{
        transform: scale(1.25);
   }
`;

const Header = ({location : {pathname}}) => (
    <HeaderBox>
        <Container>
            <HeaderClass>
                <List>
                    <Item current={pathname === "/"}><SLink to="/" >Home</SLink></Item>
                    <Item current={pathname === "/introduces"}><SLink to="/introduces">Introduce</SLink></Item>
                    <Item current={pathname === "/notices"}><SLink to="/notices">Notice</SLink></Item>
                    <Item current={pathname === "/boards"}><SLink to="/boards">Board</SLink></Item>
                    <Item current={pathname === "/applies"}><SLink to="/applies">Apply</SLink></Item>
                    <Item current={pathname === "/posts"}><SLink to="/posts">Post</SLink></Item>
                    <Item current={pathname === "/tasks"}><SLink to="/tasks">Task</SLink></Item>
                    <Item current={pathname === "/contacts"}><SLink to="/contacts">Contact</SLink></Item>
                </List>
            </HeaderClass>
        </Container>
    </HeaderBox>
);

export default withRouter(Header);
