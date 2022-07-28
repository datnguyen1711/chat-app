import { SendOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import Message from "./Message";

const WrapperChatStyled = styled.div`
  height: 100vh;
`;
const AreaChatStyled = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 15px;
`;
const HeaderChatStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  height: 60px;
  border-bottom: 1px solid #e8e8e8;
  .username {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
  }
  .desc {
    color: #7f7f7f;
  }
`;
const ContentStyled = styled.div`
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const FormChatStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e8e8e8;
  padding: 15px;
  .ant-form-item {
    flex: 1;
    border-radius: 5px;
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const ChatWindow = () => {
  return (
    <WrapperChatStyled>
      <HeaderChatStyled>
        <Avatar size={40} icon={<UserOutlined />} />
        <div className="username">
          <Typography.Text>Thanh Dat</Typography.Text>
          <Typography.Text className="desc">Active now</Typography.Text>
        </div>
      </HeaderChatStyled>
      <ContentStyled>
        <AreaChatStyled>
          <Message
            text={"Day la mess tu dong"}
            displayName={"Thanh Dat"}
            createdAt={"Today 04:30AM"}
          />
          <Message
            text={"Day la mess tu dong"}
            displayName={"Thanh Dat"}
            createdAt={"Today 04:30AM"}
          />
          <Message
            text={"Day la mess tu dong"}
            displayName={"Thanh Dat"}
            createdAt={"Today 04:30AM"}
          />
          <Message
            text={"Day la mess tu dong"}
            displayName={"Thanh Dat"}
            createdAt={"Today 04:30AM"}
          />
        </AreaChatStyled>
        <FormChatStyled>
          <Form.Item>
            <Input
              placeholder="Type a message..."
              bordered={false}
              autoComplete={"off"}
            />
          </Form.Item>
          <SendOutlined />
        </FormChatStyled>
      </ContentStyled>
    </WrapperChatStyled>
  );
};

export default ChatWindow;
