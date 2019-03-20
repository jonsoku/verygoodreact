import React, { Component } from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
// copy-paste
const BoardsBox = styled.div`
`;
const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
    height: inherit;
`;
const BoardsClass = styled.div`
    width : 100%;
`;

// ----------- 박스 네임 수정.. -------------

const BoardShowBox = styled.div`

`;

// ---------------------------------------

const BoardShowInfo = styled.ul`
    display:grid;
`;

const BoardShowInfoList = styled.li`
    &:first-child{
    };
    &:nth-child(2){
    }
    &:nth-child(3){
    }
    &:nth-child(4){
    }
    &:last-child{
    }
    span{

    }
`;

const BoardShowDeleteButton = styled.button`
    border:0;
    font-size: 11px;
    cursor:pointer;
    &:hover{
        background-color:blue;
        color:#fff;
    }
`;
const BoardShowEditButton = styled(Link)`
    display:block;
    background-color: #fff;
    font-size: 13px;
    text-align:center;
    &:hover{
        background-color:blue;
        color:#fff;
    }
`;

export default class BoardShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            board : []
        }
        this.renderBoard = this.renderBoard.bind(this)
    }

    handleDelete(id){
        Axios.delete(`api/boards/${id}`)
        .then(
            alert('삭제되었습니당')
        )
        .then(
            this.props.history.push('/boards')
        )
    }

    renderBoard(){
        console.log(this.state)
        return (
            <BoardShowBox>
                <BoardShowInfo>
                    <BoardShowInfoList>{this.state.board.id}</BoardShowInfoList>
                    <BoardShowInfoList>{this.state.board.title}</BoardShowInfoList>
                    <BoardShowInfoList>{this.state.board.description}</BoardShowInfoList>
                    <BoardShowInfoList>{this.state.board.created_at}</BoardShowInfoList>
                    <BoardShowInfoList>{this.state.board.updated_at}</BoardShowInfoList>
                    <BoardShowDeleteButton onClick={()=>this.handleDelete(this.state.board.id)}>Delete</BoardShowDeleteButton>
                    <BoardShowEditButton to={`/boards/${this.state.board.id}/edit`}>Edit</BoardShowEditButton>
                </BoardShowInfo>
            </BoardShowBox>
        )
    }

    getBoard(){
        Axios.get(`/api/boards/${this.props.match.params.id}`).then(
            response => this.setState({
                board : response.data.board
            })
        )
    }

    componentWillMount(){
        this.getBoard();
    }

  render() {
    return (
      <BoardsBox>
          <Container>
              <BoardsClass>
                 {this.renderBoard()}
              </BoardsClass>
          </Container>
      </BoardsBox>
    )
  }
}
