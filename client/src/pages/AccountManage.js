import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";


function AccountManage() {
  let history = useHistory();
  const [userData, setUserData,] = useState("");
  const { authState } = useContext(AuthContext);
  const id  = localStorage.id;

  useEffect(() => {
    console.log(authState);
    console.log(localStorage);
    axios.get(`http://localhost:3001/auth/basicinfo/?id=${id}`).then((response) => {
      setUserData(response.data);
    });
  }, []);

  return (
    <><div className="loginContainer">
      <div className="basicInfo">
        {" "}
        <h1> Username: {userData.username} </h1>
        <h1> First Name: {userData.Firstname} </h1>
        <h1> Last Name: {userData.Lastname} </h1>
        <h1> Email: {userData.Email} </h1>
        <h1> Phone Number: {userData.Phonenumber} </h1>
        <h1> Notification Type: {userData.Notification} </h1>
        <h1> Relationship: {userData.Relationship} </h1>
          <button
            onClick={() => {
              history.push("/updateInfo");
            }}
          >
            {" "}
            Change My Account Information
          </button>
        

      </div>
    </div></>

  );
}

export default AccountManage;
