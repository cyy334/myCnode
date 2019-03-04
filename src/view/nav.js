import React,{Component} from "react";
import {Menu, Icon} from "antd";
import {Link} from "react-router-dom";
class Nav extends Component{
    render(){
        let {mode,id} = this.props;
        return(
        <Menu mode={mode} id={id} selectedKeys={["1"]}>
            <Menu.Item key="1">
                <Link to="/index/all" ><Icon type="home" />首页</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/book" ><Icon type="book" />新手入门</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/api" ><Icon type="api" />API</Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to="/about" ><Icon type="info-circle" />关于</Link>
            </Menu.Item>
        </Menu>
        );
    }
}
export default Nav;