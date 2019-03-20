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
`;

// ----------- 박스 네임 수정.. -------------

const NoticeShowBox = styled.div`

`;

// ---------------------------------------

const NoticeShowInfo = styled.ul`
    display:grid;
`;

const NoticeShowInfoList = styled.li`
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

const NoticeShowDeleteButton = styled.button`
    border:0;
    font-size: 11px;
    cursor:pointer;
    &:hover{
        background-color:blue;
        color:#fff;
    }
`;
const NoticeShowEditButton = styled(Link)`
    display:block;
    background-color: #fff;
    font-size: 13px;
    text-align:center;
    &:hover{
        background-color:blue;
        color:#fff;
    }
`;

export default class NoticeShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            notice : []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id){
        Axios.delete(`api/notices/${id}`).then(
            alert('삭제완료되었습니다.')
        ).then(
            this.props.history.push('/notices')
        )
    }


    renderNotice(){
        // return this.state.notice.map(noticeItem => (
        //     <div key={noticeItem.id}>
        //         {noticeItem.title}
        //     </div>
        // ))
        console.log(this.state.notice)
        return (
            <NoticeShowInfo>
                <NoticeShowInfoList><span>{this.state.notice.id}</span></NoticeShowInfoList>
                <NoticeShowInfoList><span>{this.state.notice.created_at}</span></NoticeShowInfoList>
                <NoticeShowInfoList><span>{this.state.notice.updated_at}</span></NoticeShowInfoList>
                <NoticeShowInfoList><span>{this.state.notice.title}</span></NoticeShowInfoList>
                <NoticeShowInfoList><span>{this.state.notice.description}</span></NoticeShowInfoList>
                <NoticeShowDeleteButton onClick={()=>this.handleDelete(this.state.notice.id)}>Delete</NoticeShowDeleteButton>
                <NoticeShowEditButton to={`/notices/${this.state.notice.id}/edit`}>edit</NoticeShowEditButton>
            </NoticeShowInfo>
        )
    }

    getNotice(){
        Axios.get(`/api/notices/${this.props.match.params.id}`).then(response => this.setState({
            notice : response.data.notice
        }))
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
                        <NoticeShowBox>
                            {this.renderNotice()}
                        </NoticeShowBox>
                    </NoticesClass>
                </Container>
            </NoticesBox>
        </div>
    )
  }
}
