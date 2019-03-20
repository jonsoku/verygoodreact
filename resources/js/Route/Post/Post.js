import React, { Component } from 'react'
import Axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Loader from '../../components/Loader';


const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
    height : inherit;
`;

const PostBox = styled.div`
    display:grid;
    grid-auto-flow: column;
    width: 20vw;
    margin: 0 auto;
    background-color: black;
    margin-bottom: 1rem;
    color:#fff;
`;

const PostComments = styled.div`

`

export default class Post extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts : [],
            loading: true,
            error : null
        }
        this.renderPosts = this.renderPosts.bind(this);
    }

    renderPosts(){
        return this.state.posts.map(post => (
            <PostBox key={post.id}>
                <Link to={`/posts/${post.id}`}>
                    <div>id : {post.id}</div>
                    <div>title : {post.title}</div>
                    <div>author : {post.user.name}</div>
                    <div>description : {post.description}</div>
                    <div>created_at : {post.created_at}</div>
                    <div>updated_at : {post.updated_at}</div>
                </Link>
                <PostComments>
                    {post.post_comments.length ? post.post_comments.length : ''}
                </PostComments>
            </PostBox>
        ));
    }
    renderPostsBox(){
        return (
            <Container>
                <Link to="/posts/create">CREATE</Link>
                {this.renderPosts()}
            </Container>
        )
    }

    async getPosts(){
        try{
            return await Axios.get(`/posts`).then(response => this.setState({
                posts : [...response.data.posts],
            }));
        }catch{
            this.setState({
                error : 'error났어임마'
            })
        }finally{
            this.setState({
                loading : false
            })
        }
    }

    componentWillMount(){
        this.getPosts();
    }

    render() {
        console.log(this.state)
        return (
        <>
            {this.state.loading ? <Loader /> : this.renderPostsBox()}
        </>
        )
    }
}
