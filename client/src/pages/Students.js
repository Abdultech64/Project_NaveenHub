import React, { useEffect, useState } from "react";
import axios from "axios";
import Student from "../components/Student";
// import RegisterFom from "./RegisterFom";
// import Login from "./Login";
// import LoginForm from "./LoginForm";

const Students = () => {
  // const [column, setColumn] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/register")
      .then((res) => {
        setStudentList(res.data);
        setAllStudents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:5000/getalldata")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setColumn(Object.keys(data));
  //       setRecords(data);
  //     });
  // }, []);

  const filterStudent = (e) => {
    setStudentList(
      allStudents.filter((f) => f.username.toLowerCase().includes(e.target.value))
    );
  };
  return (
    <>
    {/* <LoginForm /> */}
    {/* <RegisterFom/> */}
      <div>
        <h3>Student Portal</h3>

        <form className="form">
          <label>Search Student </label>
          <input
            type="text"
            name="username"
            placeholder="Student name"
            onChange={filterStudent}
          />
        </form>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>
                <h3>Name</h3>
              </td>
              <td>
                <h3>Roll</h3>
              </td>
              <td>
                <h3>Department</h3>
              </td>
              <td>
                <h3>Address</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            {studentList.map((record, i) => 
              <>
              <Student student = {record} key={i} />
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Students;