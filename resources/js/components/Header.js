import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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

const Header = styled.div`

`;

const List = styled.ul`
    overflow:hidden;
    text-align:center;
`;
const Item = styled.li`
    float:left;
    width:12.5%;
    padding: 1rem;
`;

const SLink = styled(Link)`
    transition: all 0.2s;
    color: var(--grey);
    display:block;
    margin: 2rem 0;
   &:hover{
        color: var(--light);
        transform: scale(1.1);
   }
`;

export default () => (
    <HeaderBox>
        <Container>
            <Header>
                <List>
                    <Item><SLink to="/">Home</SLink></Item>
                    <Item><SLink to="/introduces">Introduce</SLink></Item>
                    <Item><SLink to="/notices">Notice</SLink></Item>
                    <Item><SLink to="/boards">Board</SLink></Item>
                    <Item><SLink to="/applies">Apply</SLink></Item>
                    <Item><SLink to="/posts">Post</SLink></Item>
                    <Item><SLink to="/tasks">Task</SLink></Item>
                    <Item><SLink to="/contacts">Contact</SLink></Item>
                </List>
            </Header>
        </Container>
    </HeaderBox>
)
