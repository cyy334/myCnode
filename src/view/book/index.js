import React, { Component } from "react";
import { Card } from "antd"
import { Link } from "react-router-dom";
import data from "./data";
require("../index.css");
require("./book.css");
class Book extends Component {
    render() {
        return (
            <div class="wrap">
                <Card
                    title={<div className="crumbs"><Link to="/index/all">首页 / </Link>Node.js入门</div>}
                    loading={false}
                    type="inner"
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data
                        }}
                    >
                    </div>
                </Card>

            </div>
        );
    }
}
export default Book;