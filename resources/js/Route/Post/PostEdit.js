import React, { Component } from 'react'
import Axios from 'axios';

export default class PostEdit extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            description : '',
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
        Axios.put(`/posts/${this.props.match.params.id}`,{
            title : this.state.title,
            description : this.state.description
        }).then(
            this.props.history.push('/posts')
        )
    }

    getPost(){
        Axios.get(`/posts/${this.props.match.params.id}`).then(response => this.setState({
            title : response.data.post.title,
            description : response.data.post.description
        }))
    }

    componentWillMount(){
        this.getPost();
    }

    renderPostForm(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                        onChange={this.handleChange1}
                        value={this.state.title}
                        placeholder="post title"
                        />
                    </div>
                    <div>
                        <textarea
                        onChange={this.handleChange2}
                        value={this.state.description}
                        placeholder="post description"
                        />
                    </div>
                    <div>
                        <button>포스트작성</button>
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return (
        <div>
            {this.renderPostForm()}
        </div>
        )
    }
}
