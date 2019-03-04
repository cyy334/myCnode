import React,{Component} from "react";
import {Link} from "react-router-dom";
import {Layout, Row, Col, Input, Icon, Dropdown, Button} from "antd";
import Nav from "./nav";
const Search = Input.Search;
class MainHeader extends Component {
    render(){
        return (
            <Layout.Header style={{background:"#444"}}>
                <Row className="wrap" row-flex="space-between">
                    <Col md={12}  xs={18} className="header_logo"  >
                        <h1 id="logo">
                            <img src={require ("../common/img/cnode.svg")} />
                        </h1>
                        <Search
                            id="search"
                            placeholder="请输入搜索的内容"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </Col>
                    <Col md={12} xs={0} >
                       <Nav id="nav" mode="horizontal" />
                    </Col>
                    <Col md={0} xs={6}>
                        <Dropdown 
                            overlay={
                                <Nav id="xs_menu" mode="vertical" />
                            }
                            trigger={["click","touchend"]}
                            placement="bottomCenter"
                        >
                            <Button className="xs_btn">
                                <Icon type="bars" />
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        );
    }
}
export default MainHeader;