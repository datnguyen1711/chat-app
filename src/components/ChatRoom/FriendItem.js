import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const FriendListStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  .username {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
  }
  .desc {
    color: #7f7f7f;
  }
`;

const FriendItem = ({ name }) => {
  return (
    <FriendListStyled>
      <Avatar size={40} icon={<UserOutlined />} />
      <div className="username">
        <Typography.Text>{name}</Typography.Text>
        <Typography.Text className="desc">
          Xin chào mọi người mình là Đạt
        </Typography.Text>
      </div>
    </FriendListStyled>
  );
};

export default FriendItem;
