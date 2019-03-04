import React,{Component} from "react";
import {Card,List, Avatar} from "antd";
import {Link} from "react-router-dom";
export default class UserList extends Component{
    render(){
        let {loading,title,data} = this.props;
        return (
            <Card
                className="user_list"
                loading = {loading}
                title = {title}
                type = "inner"
            >
                <List
                    
                    dataSource = {data}
                    renderItem = {item=>(
                        <List.Item key={item.id}>
                            <div class="userInfo">
                                <Avatar src={item.author.avatar_url} />
                                <div className="reply_count">
                                    <span title="回复数" className="count_replies">308</span>
                                    <span className="count_seperator">/</span>
                                    <span title="点击数" className="count_click">5706</span>
                                </div>
                            </div>
                            <div class="content">
                                <div style={{marginTop:"10px"}} className="topic_title"><Link to={"/details/"+item.id}>{item.title}</Link></div>
                                <time>最后回复时间：{item.last_reply_at.split("T")[0]}</time>
                            </div>
                        </List.Item>
                    )}
                >

                </List>
            </Card>
        );
    }
}