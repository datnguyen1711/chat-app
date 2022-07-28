import { Avatar, Button, Typography } from "antd";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthProvider";
import { auth } from "../../firebase/config";

const InfoGroupStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid #e8e8e8;
  .username {
    margin-left: 8px;
  }
`;

const UserInfo = () => {
  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);

  return (
    <InfoGroupStyled>
      <div>
        <Avatar src={photoURL}></Avatar>
        <Typography.Text className="username">{displayName}</Typography.Text>
      </div>
      <Button onClick={() => signOut(auth)}>Logout</Button>
    </InfoGroupStyled>
  );
};

export default UserInfo;
