import React,{Component} from "react";
import TextDetails from "./textDetails";
import ReplyList from "./replyList";
import {connect} from "react-redux";
import axios from "axios";
class Details extends Component{
    constructor(arg){
        super(arg);
        let id = this.props.match.params.id;
        this.getData(id);
    }
    // shouldComponentUpdate(nextProps,nextState){

    // }
    getData(id){
        
        this.props.dispatch((dispatch)=>{
            dispatch({
                type: "DETAILS_UPDATA"
            });
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then((res)=>{
                dispatch({
                    type: "DETAILS_UPDATA_SUCCESS",
                    data: res.data
                });

            }).catch((err)=>{
                dispatch({
                    type: "DETAILS_UPDATA_ERROR"
                });
            });
        })
    }
    render(){
        let {loading,data} = this.props;
        let isLoading = false;
        return (
            <div className="wrap">
                <TextDetails 
                    loading={loading}
                    data={data}
                />
                {
                    data.replies.length!==0?<ReplyList 
                        replies={data.replies} 
                        loading = {loading} 
                        replyCount={data.reply_count}
                    />:''
                }
            </div>
        );
    }
}
export default connect(state=>state.details)(Details);