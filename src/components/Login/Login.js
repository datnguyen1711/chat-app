import { Button, Col, Row, Typography } from "antd";
import React from "react";
import { auth, db } from "../../firebase/config";
import {
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { addDocument } from "../../firebase/services";

const { Title } = Typography;
const fbProvider = new FacebookAuthProvider();

const Login = () => {
  const handleFBLogin = () => {
    signInWithPopup(auth, fbProvider).then(({ _tokenResponse, user }) => {
      console.log(user.displayName);
      if (_tokenResponse?.isNewUser) {
        addDocument("users", {
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          uid: user.uid,
          providerId: _tokenResponse.providerId,
        });
      }
    });
  };

  return (
    <Row justify="center" style={{ height: 800 }}>
      <Col span={8}>
        <Title style={{ textAlign: "center" }} level={3}>
          Login
        </Title>
        <Button style={{ width: "100%", marginBottom: 5 }}>
          Login with Google
        </Button>
        <Button style={{ width: "100%" }} onClick={handleFBLogin}>
          Login with Facebook
        </Button>
      </Col>
    </Row>
  );
};

export default Login;
