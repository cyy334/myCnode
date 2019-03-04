import React,{Component} from "react";
import {Card,Avatar} from "antd";
import {Link} from "react-router-dom"
import TextTag from "../textTag";
class TextDetails extends Component{
    render(){
        let {data,loading} = this.props;
        const title = (
        <div>
            <h3><TextTag data = {data} />{this.props.data}</h3>
            <div style={{
                    display:"flex",
                    alignItems:"center"
                }}>
                <Avatar src={data.author.author_url} />
                <Link to={"/user/"+data.author.loginname}>{data.author.loginname}</Link>
                <span>发表于:{data.create_at.split("T")[0]}</span>
            </div>
        </div>
        );
        return (
            <Card
                title = {data.title}
                loading = {loading}
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.content
                    }}
                ></div>
            </Card>
        );
    }
}
export default TextDetails;