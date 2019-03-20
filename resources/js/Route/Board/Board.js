import React, { Component } from 'react'
import Axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Loader from '../../components/Loader';
// copy-paste
const BoardsBox = styled.div`
margin-top: 2rem;
`;
const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
    height: inherit;
`;
const BoardsClass = styled.div`
    width : 100%;
`;

// --------------------------------------

const BoardsBoxBoarder = styled.div`
    border: 1px solid #1cc7d0;
`;
const BoardBoxHead = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr 1fr 1.5fr;
    grid-auto-rows: 2rem;
    background-color : #1cc7d0 ;
    text-align:center;
    align-items:center;
    color:var(--light);
`;

const BoardBoxBody = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr 1fr 1.5fr;
    grid-auto-rows: 2rem;
    background-color : #fefefe ;
    text-align:center;
    align-items:center;

`;
const BoardNo = styled.div`

`;
const BoardTitle = styled.div`
    a{
        display:block;
    }
`;

const BoardAuthor = styled.div`
`;
const BoardCreated = styled.div`
`;
const BoardCreateBox = styled.div`
    text-align:right;
    margin-top: 1rem;

`;
const BoardCreateButton = styled(Link)`
    color:var(--light);
    background-color: #008eaa;
    padding:0.5rem 1rem;
    transition: all 0.4s ease-in;
    &:hover{
        transform:scale(1.1);
    }
`;


export default class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            boards : [],
            error: null,
            loading: true
        }
    }

    renderBoards(){
        console.log(this.state.boards)
        return this.state.boards.map(board => (
            <BoardBoxBody key={board.id}>
                <BoardNo>{board.id}</BoardNo>
                <BoardTitle><Link to={`/boards/${board.id}`}>{board.title}      {board.board_comments.length ? board.board_comments.length : ''}</Link></BoardTitle>
                <BoardAuthor>{board.user.name}</BoardAuthor>
                <BoardCreated>{board.created_at}</BoardCreated>
            </BoardBoxBody>
        ))
    }

    renderBox(){
        return (
        <BoardsBox>
            <Container>
                <BoardsClass>
                    <BoardsBoxBoarder>
                        <BoardBoxHead>
                            <BoardNo>No</BoardNo>
                            <BoardTitle>Title</BoardTitle>
                            <BoardAuthor>Author</BoardAuthor>
                            <BoardCreated>Created_at</BoardCreated>
                        </BoardBoxHead>
                    </BoardsBoxBoarder>
                    <BoardsBoxBoarder>
                        {this.renderBoards()}
                    </BoardsBoxBoarder>
                    <BoardCreateBox>
                        <BoardCreateButton to="/boards/create">create</BoardCreateButton>
                        </BoardCreateBox>
                </BoardsClass>
            </Container>
        </BoardsBox>
        )
    }
    async getBoards(){
        try{
            return await Axios.get('/boards').then(response => this.setState({
                boards : [...response.data.boards]
            }))
        }catch{
            this.setState({
                error : "error야 !!! "
            })
        }finally{
            this.setState({
                loading : false
            })
        }

    }

    componentWillMount(){
        this.getBoards();
    }
  render() {
      console.log(this.state)

    return (
        <>
            {this.state.loading ? <Loader/> : this.renderBox()}
        </>
    )


  }
}
