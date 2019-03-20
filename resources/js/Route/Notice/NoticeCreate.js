import React, { Component } from 'react'
import Axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// copy-paste
const NoticesBox = styled.div`
`;
const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
    background-color: #eaeaea;
    height: inherit;
`;
const NoticesClass = styled.div`
    width : 100%;
`;

// --------------------------------------

const NoticeCreateBox = styled.div`

`;
const NoticeCreateForm = styled.form`

`;

const NoticeCreateTitle = styled.div`
    margin: 0 auto;
    width:50%;
    margin-bottom: 30px;
    input{
        width:100%;
        height: 4vh;
        border : 0;
        font-size: 1.4rem;
    }
`;
const NoticeCreateDescription = styled.div`
    margin: 0 auto;
    width:50%;
    textarea{
        width:100%;
        height: 50vh;
        border: 0;
        font-size: 1.4rem;
    }
`;

const NoticeCreateButton = styled.div`
    margin: 0 auto;
    width: 50%;
    text-align:center;
    button{
        border:0;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor:pointer;
        transition: transform .4s;
        &:hover{
            transform:scale(0.95);
        }
    }
`;

export default class NoticeCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            description : ''
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(e){
        this.setState({
            title : e.target.value
        })
    }
    handleChange2(e){
        this.setState({
            description : e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        Axios.post('/notices', {
            title : this.state.title,
            description : this.state.description
        }).then(
            this.props.history.push('/notices')
        )
    }

  render() {
    return (
        <div>
            <NoticesBox>
                <Container>
                    <NoticesClass>
                        <NoticeCreateBox>
                            <NoticeCreateForm onSubmit={this.handleSubmit}>
                                <NoticeCreateTitle>
                                    <input
                                    type="text"
                                    onChange={this.handleChange1}
                                    value={this.state.title}
                                    placeholder="제목을 입력해주세요."
                                    ></input>
                                </NoticeCreateTitle>
                                <NoticeCreateDescription>
                                    <textarea
                                    onChange={this.handleChange2}
                                    value={this.state.description}
                                    rows="5"
                                    placeholder="내용을 입력해주세요."
                                    />
                                </NoticeCreateDescription>
                                <NoticeCreateButton>
                                    <button type="submit">작성</button>
                                </NoticeCreateButton>
                            </NoticeCreateForm>
                        </NoticeCreateBox>
                    </NoticesClass>
                </Container>
            </NoticesBox>
        </div>
    )
  }
}
