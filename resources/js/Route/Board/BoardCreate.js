import React, { Component } from 'react'
import Axios from 'axios';
import styled from 'styled-components';
import Loader from '../../components/Loader';
// copy-paste
const BoardsBox = styled.div`
`;
const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
    height: inherit;
    background-color: black;
`;
const BoardsClass = styled.div`
    width : 100%;
`;

// --------------------------------------

const BoardCreateBox = styled.div`

`;
const BoardCreateForm = styled.form`

`;

const BoardCreateTitle = styled.div`
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
const BoardCreateDescription = styled.div`
    margin: 0 auto;
    width:50%;
    textarea{
        width:100%;
        height: 50vh;
        border: 0;
        font-size: 1.4rem;
    }
`;

const BoardCreateButton = styled.div`
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

export default class BoardCreate extends Component {
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
        });
    }

    handleChange2(e){
        this.setState({
            description : e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        Axios.post(`/boards`, {
            title : this.state.title,
            description : this.state.description,
        }).then(
            this.props.history.push('/boards')
        )
    }



  render() {
    return (
      <BoardsBox>
          <Container>
            <BoardsClass>
                <BoardCreateBox>
                    <BoardCreateForm onSubmit={this.handleSubmit}>
                        <BoardCreateTitle>
                            <input
                            onChange={this.handleChange1}
                            value={this.state.title}
                            placeholder="제목을 입력해주세요."/>
                        </BoardCreateTitle>
                        <BoardCreateDescription>
                            <textarea
                            onChange={this.handleChange2}
                            value={this.state.description}
                            placeholder="본문을 입력해주세요."/>
                        </BoardCreateDescription>
                        <BoardCreateButton>
                            <button>Create</button>
                        </BoardCreateButton>
                    </BoardCreateForm>
                </BoardCreateBox>
            </BoardsClass>
          </Container>
      </BoardsBox>
    )
  }
}
