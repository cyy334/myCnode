import React, { Component } from "react";
import { Menu, Row, Col, Pagination } from 'antd';
import { Link } from 'react-router-dom'
import  List from "./list";
class Index extends Component {
    render() {
        let tab = this.props.match.params.id;
        console.log(this.props)
        return (
            <Row className="wrap">
                <Col md={5} >
                    <Menu id="index-menu">
                        <Menu.Item>
                            <Link to="/index/all">全部</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/good">精华</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/ask">问题</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/share">分享</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/job">招聘</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/dev">测试</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col md={19}>
                    <List
                        tab = {tab}
                    ></List>
                    
                </Col>
            </Row>
        );
    }
}
export default Index;