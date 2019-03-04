import React,{Component} from "react";
import {Layout} from "antd";
import data from "../common/data/footer-data";
class MainFooter extends Component {
    render(){
        return (
            <Layout.Footer dangerouslySetInnerHTML={{
                __html:data
            }}
            style={{background:"#fff"}}
            >
            </Layout.Footer>
        );
    }
}
export default MainFooter;