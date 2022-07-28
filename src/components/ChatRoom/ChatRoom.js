import React from "react";
import { AuthContext } from "../../context/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Col, Row } from "antd";
import SideBar from "./SideBar";
import ChatWindow from "./ChatWindow";

const ChatRoom = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };
  return (
    <Row
      style={{
        height: "100vh",
        margin: "auto",
        border: "1px solid #E0E0E0",
        borderRadius: 10,
      }}
    >
      <Col span={8} style={{ borderRight: "2px solid #E0E0E0" }}>
        <SideBar />
      </Col>
      <Col span={16}>
        <ChatWindow />
      </Col>
    </Row>
  );
};

export default ChatRoom;
