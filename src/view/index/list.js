import React,{Component} from "react";
import {List,Avatar} from "antd";
import {Link} from "react-router-dom";
import TextTag from "../textTag";
import axios from "axios";
import {connect} from "react-redux"
class IndexList extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            page: 1,
        }
        this.getData(this.props.tab,this.state.page);
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.page !== nextState.page){
            this.getData(nextProps.tab,nextState.page);
            return false;
        }
        if(this.props.tab !== nextProps.tab){
            this.getData(nextProps.tab,1);
            this.setState({
                page: 1
            });
            return false;
        }
        return true;
    }
    getData(tab,page){
        this.props.dispatch((dispatch)=>{
                dispatch({
                    type: "LIST_UPDATA"
                });
               axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}
               &limit=10`).then((res)=>{
                    dispatch({
                        type: "LIST_UPDATA_SUCCESS",
                        data: res.data.data
                    });
               }).catch((err)=>{
                dispatch({
                    type: "LIST_UPDATA_ERROR",
                    data: err
                });
               });
        });
    }
    render(){
        //loading,data,tab,page
        let {loading,data} = this.props;
        let pagination = {
            current: this.state.page,
            pageSize: 10,
            total: 1000,
            onChange:((current)=>{
                this.setState({
                    page: current
                });
            })
        }
        return <List
                className="index-list" 
                loading = {loading}
                dataSource={data}
                pagination= {loading?false:pagination}
                renderItem = {item=>(<List.Item actions={["回复"+item.reply_count,"访问"+item.visit_count]}>
                    <List.Item.Meta 
                        avatar={<Avatar src={item.author.avatar_url} />}
                        title = {<div><TextTag data={item} /><Link to={"/details/"+item.id}>{item.title}</Link></div>}
                        description={(<p><Link to={"/user/"+item.author.loginname}>
                            {item.author.loginname}
                        </Link>
                            发表于:{item.create_at.split("T")[0]}
                        </p>)}
                     />
                </List.Item>)}
             >
            </List>;
    }
}

export default connect(state=>(state.list))(IndexList);
//connect 把“指定的state & 指定的action”和 React组件 连接起来 ==> 容器组件