import React, { useContext, useEffect, useState } from "react";
import { store } from "../App";
import { redirect } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();

  const [token, setToken] = useContext(store);
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/myprofile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!token) {
    // return redirect("/loginpage");
    navigate("/loginpage");
  }
  return (
    <div>
      {
        <center>
          welcome user :<button onClick={() => setToken(null)}>Logout</button>
        </center>
      }
    </div>
  );
};

export default MyProfile;