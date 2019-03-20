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
    grid-template-columns: repeat(3, 1fr);
`;

const BoardShowInfoList = styled.li`
    &:first-child{
    };
    &:nth-child(2){
    }
    &:nth-child(3){
    }
    &:nth-child(4){
        grid-area: span 1 / span 4;
    }
    &:nth-child(5){
        grid-area: span 1 / span 4;
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
    constructor(props) {
      super(props);
      this.state = {
        board: [],
        boardComments: [],
        user: [],
        body: ""
      };
      this.renderBoard = this.renderBoard.bind(this);
      this.renderBoardComments = this.renderBoardComments.bind(this);
      this.renderBoardCommentForm = this.renderBoardCommentForm.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleCommentDelete = this.handleCommentDelete.bind(this);
    }

    handleDelete(id) {
      Axios.delete(`api/boards/${id}`)
        .then(alert("삭제되었습니당"))
        .then(this.props.history.push("/boards"));
    }

    renderBoard() {
      return (
        <BoardShowBox>
          <BoardShowInfo>
            <BoardShowInfoList>{this.state.board.id}</BoardShowInfoList>
            <BoardShowInfoList>{this.state.user.name}</BoardShowInfoList>
            <BoardShowInfoList>{this.state.board.created_at}</BoardShowInfoList>
            <BoardShowInfoList>{this.state.board.updated_at}</BoardShowInfoList>
            <BoardShowInfoList>{this.state.board.title}</BoardShowInfoList>
            <BoardShowInfoList>{this.state.board.description}</BoardShowInfoList>
            <BoardShowDeleteButton
              onClick={() => this.handleDelete(this.state.board.id)}
            >
              Delete
            </BoardShowDeleteButton>
            <BoardShowEditButton to={`/boards/${this.state.board.id}/edit`}>
              Edit
            </BoardShowEditButton>
          </BoardShowInfo>
        </BoardShowBox>
      );
    }

    getBoard() {
      Axios.get(`/boards/${this.props.match.params.id}`).then(response =>
        this.setState({
          board: response.data.board,
          boardComments: [...response.data.boardComments],
          user: response.data.user
        })
      );
    }

    handleCommentDelete(id) {
      Axios.delete(`/boards/${this.props.match.params.id}/boardComments/${id}`);
    }

    renderBoardComments() {
      return this.state.boardComments.map(boardComment => (
        <div key={boardComment.id}>
          <div>
            <p>{boardComment.body}</p>
            <span>by. {boardComment.user.name}</span>
            <span>{boardComment.created_at}</span>
            <button onClick={() => this.handleCommentDelete(boardComment.id)}>
              delete
            </button>
          </div>
        </div>
      ));
    }

    handleChange1(e) {
      this.setState({
        body: e.target.value
      });
    }
    handleSubmit(e) {
      e.preventDefault();
      Axios.post(`/boards/${this.props.match.params.id}/boardComments`, {
        body: this.state.body
      }).then(this.getBoard());
    }

    renderBoardCommentForm() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <textarea
                onChange={this.handleChange1}
                value={this.state.body}
                placeholder="comment를 입력해주세요.."
              />
            </div>
            <div>
              <button type="submit">댓글달기</button>
            </div>
          </form>
        </div>
      );
    }

    componentWillMount() {
      this.getBoard();
    }

    render() {
      return (
        <BoardsBox>
          <Container>
            <BoardsClass>
              {this.renderBoard()}
              {this.renderBoardCommentForm()}
              {this.renderBoardComments()}
            </BoardsClass>
          </Container>
        </BoardsBox>
      );
    }
  }
