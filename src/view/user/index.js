import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Avatar, Card } from "antd";
import UserList from "./userList";
import {connect} from "react-redux";
import axios from "axios";
require("./user.css");
class User extends Component {
    constructor(arg){
        super(arg)
        let id = this.props.match.params.id;
        this.getData(id);
    }
    shouldComponentUpdate(nextProps){
        let id = this.props.match.params.id;
        let nextId = nextProps.match.params.id;
        console.log(id,nextId); 
        if(id != nextId){
            this.getData(nextId);
            return false
        }
        return true;
    }
    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type: "USER_UPDATA"
            });
            axios.get(`https://cnodejs.org/api/v1/user/${id}`).then((res)=>{
                dispatch({
                    type: "USER_UPDATA_SUCCESS",
                    data: res.data
                });
                console.log(res);
            }).catch((err)=>{
                dispatch({
                    type: "USER_UPDATA_ERROR"
                });
                console.log(err);
            });
        }); 
    }
    render() {
        let {loading,data}  = this.props;
        let {avatar_url,create_at,loginname,score,recent_replies,recent_topics,githubUsername} = data;
        return (
            <div className="wrap">
                <Card
                    title={<div><Link to="/index/all">主页 / </Link></div>}
                >
                    <div className="user">
                        <Avatar src={avatar_url} />
                        <span className="loginname">{loginname}</span>
                    </div>
                    <div className="user-info">
                        <div className="score">{score} 积分</div>
                        <div className="fa fa-github git-address"><a href="https://github.com/meikidd" _target="blank">@{githubUsername}</a></div>
                        <div className="regist-time">注册时间:{create_at.split("T")[0]}</div>
                    </div>

                </Card>
                <UserList
                    loading={loading}
                    data={recent_topics}
                    title="最近创建的话题"
                />

                <UserList
                    loading={loading}
                    data={recent_replies}
                    title="最近回复的话题"
                />
            </div>
        );
    }
}
export default connect(state=>state.user)(User);