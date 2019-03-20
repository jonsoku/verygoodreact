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

const NoticeEditBox = styled.div`

`;
const NoticeEditForm = styled.form`

`;

const NoticeEditTitle = styled.div`
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
const NoticeEditDescription = styled.div`
    margin: 0 auto;
    width:50%;
    textarea{
        width:100%;
        height: 50vh;
        border: 0;
        font-size: 1.4rem;
    }
`;

const NoticeEditButton = styled.div`
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

export default class NoticeEdit extends Component {

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
        Axios.put(`/api/notices/${this.props.match.params.id}`, {
            title : this.state.title,
            description : this.state.description
        }).then(
            this.props.history.push('/notices')
        )
    }

    getNotice(){
        Axios.get(`/api/notices/${this.props.match.params.id}/edit`).then(response => this.setState({
            title : response.data.notice.title,
            description : response.data.notice.description
        }));
    }

    componentWillMount(){
        this.getNotice();
    }

  render() {
    return (
        <div>
            <NoticesBox>
                <Container>
                    <NoticesClass>
                        <NoticeEditBox>
                            <NoticeEditForm onSubmit={this.handleSubmit}>
                                <NoticeEditTitle>
                                    <input
                                    type="text"
                                    onChange={this.handleChange1}
                                    value={this.state.title}
                                    placeholder="제목을 입력해주세요."
                                    ></input>
                                </NoticeEditTitle>
                                <NoticeEditDescription>
                                    <textarea
                                    onChange={this.handleChange2}
                                    value={this.state.description}
                                    rows="5"
                                    placeholder="내용을 입력해주세요."
                                    />
                                </NoticeEditDescription>
                                <NoticeEditButton>
                                    <button type="submit">작성</button>
                                </NoticeEditButton>
                            </NoticeEditForm>
                        </NoticeEditBox>
                    </NoticesClass>
                </Container>
            </NoticesBox>
        </div>
    )
  }
}
