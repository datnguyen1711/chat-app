import { Avatar, Button, Col, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import FriendList from "./FriendList";
import UserInfo from "./UserInfo";

const SideBar = () => {
  return (
    <Row>
      <Col span={24}>
        <UserInfo />
      </Col>
      <Col span={24}>
        <FriendList />
      </Col>
    </Row>
  );
};

export default SideBar;
