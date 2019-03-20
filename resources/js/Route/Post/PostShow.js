import React, { Component } from 'react'
import Axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
    width : 1100px;
    margin: 0 auto;
`;
const PostShowBox = styled.div`
`;
const PostShowUl = styled.ul``;

const PostShowLi = styled.li``;

const PostShowDeleteButton = styled.div`
    button{
        width:100%;
        border:0;
        cursor:pointer-events;
        &:hover{
            background-color:black;
            color:white;
        }
    }
`;
const PostShowEditButton = styled.div`
    a{
        display:block;
        width:100%;
        text-align:center;
        &:hover{
            background-color:black;
            color:white;
        }
    }
`;

const PostCommentsBox = styled.div`

`;

export default class PostShow extends Component {
    constructor(props){
        super(props);
        this.state = {
            post : [],
            user: [],
            postComments: [],
            body : ""
        }
        this.renderPost = this.renderPost.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderPostBox = this.renderPostBox.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.renderPostComments = this.renderPostComments.bind(this);
        this.renderPostCommentForm = this.renderPostCommentForm.bind(this);
    }

    handleDelete(id){
        Axios.delete(`/posts/${id}`).then(
            alert('삭제완료~!')
        ).then(
            this.props.history.push('/posts')
        )
    }

    renderPost(){
        return (
            <PostShowBox>
                <PostShowUl>
                    <PostShowLi>{this.state.post.id}</PostShowLi>
                    <PostShowLi>{this.state.user.name}</PostShowLi>
                    <PostShowLi>{this.state.post.description}</PostShowLi>
                    <PostShowLi>{this.state.post.created_at}</PostShowLi>
                    <PostShowLi>{this.state.post.updated_at}</PostShowLi>
                </PostShowUl>
            </PostShowBox>
        )
    }
    renderPostBox(){
        return (
            <Container>
                {this.renderPost()}
                <PostShowDeleteButton>
                    <button onClick={()=>this.handleDelete(this.state.post.id)}>삭제하기</button>
                </PostShowDeleteButton>
                <PostShowEditButton>
                    <Link to={`/posts/${this.state.post.id}/edit`}>EDIT</Link>
                </PostShowEditButton>
                <PostCommentsBox>
                    {this.renderPostCommentForm()}
                    {this.renderPostComments()}
                </PostCommentsBox>
            </Container>
        )
    }

    renderPostComments(){
        return this.state.postComments.map(postComment => (
            <div key={postComment.id}>
                {postComment.body} by..
                {postComment.user.name}
            </div>
        ))
    }

    handleChange1(e){
        this.setState({
            body : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        Axios.post(`/posts/${this.props.match.params.id}/postComments`,{
            body : this.state.body
        }).then(
            this.getPost(),
            this.setState({
                body: ''
            })
        )
    }


    renderPostCommentForm(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <textarea
                    onChange={this.handleChange1}
                    value={this.state.body}
                    placeholder="input text body ~"
                    />
                    </div>
                    <div>
                        <button type="submit">작성</button>
                    </div>
                </form>
            </div>
        )
    }


    getPost(){
        Axios.get(`/posts/${this.props.match.params.id}`).then(response => this.setState({
            post : response.data.post,
            user : response.data.user,
            postComments : [...response.data.postComments]
        }))
    }

    componentWillMount(){
        this.getPost();
    }

  render() {
    return (
      <>
          {this.renderPostBox()}
      </>
    )
  }
}
