import React, { Component } from 'react'
import Axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Loader from '../../components/Loader';
// copy-paste
const NoticesBox = styled.div`
`;
const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
    height: inherit;
`;
const NoticesClass = styled.div`
    width : 100%;
`;

// --------------------------------------
const Nbox = styled.div`
    width: 80%;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 3fr 1fr;
`;
const Nno = styled.div`

`;
const Ntitle = styled.div`

`;
const Ncreated = styled.div`

`;
const NoticeCreateBox = styled.div`
    text-align:center;

`;
const NoticeCreateButton = styled(Link)`
    color:var(--light);
    background-color:var(--dark);
`;

export default class Notice extends Component {

    constructor(props){
        super(props);
        this.state = {
            notices : [],
            loading: true
        }
    }

    renderNotices(){
        return this.state.notices.map(notice => (
            <Nbox key={notice.id}>
                <Nno>{notice.id}</Nno>
                <Ntitle><Link to={`/notices/${notice.id}`}>{notice.title}</Link></Ntitle>
                <Ncreated>{notice.created_at.split(' ').slice(1).join(' ')}</Ncreated>
            </Nbox>
        ));
    }

    async getNotices(){
        try{
            return await Axios.get(`/notices`).then(response => this.setState({
                notices : [...response.data.notices]
            }));
        }finally{
            this.setState({
                loading: false
            })
        }
    }

    componentWillMount(){
        this.getNotices();
    }

  render() {
    return (
        <div>
            <NoticesBox>
                <Container>
                    <NoticesClass>
                        {this.state.loading ? <Loader /> : this.renderNotices()}
                        <NoticeCreateBox>
                            <NoticeCreateButton to="/notices/create">Create</NoticeCreateButton>
                        </NoticeCreateBox>
                    </NoticesClass>
                </Container>
            </NoticesBox>
        </div>
    )
  }
}
