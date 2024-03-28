import React from "react";

const Student = ({student}) => {
  return (
    <tr key={student.__id}>
    <td>{student.username}</td>
    <td>{student.roll}</td>
    <td>{student.dept}</td>
    <td>{student.address}</td>
  </tr>
  );
};

export default Student;