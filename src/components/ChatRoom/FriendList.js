import { Col } from "antd";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import FriendItem from "./FriendItem";
import { db } from "../../firebase/config";

const FriendList = () => {
  const [documents, setDocuments] = useState([]);
  const {
    user: { uid },
  } = useContext(AuthContext);
  useEffect(() => {
    const q = query(collection(db, "rooms"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const rooms = [];
      querySnapshot.forEach((doc) => {
        rooms.push({ id: doc.id, name_group: doc.data().name_group });
      });
      console.log(rooms);
      setDocuments(rooms);
    });
    return unsubscribe;
  }, []);
  return (
    <Col span={24}>
      {documents.map((item) => (
        <FriendItem name={item.name_group} />
      ))}
    </Col>
  );
};

export default FriendList;
