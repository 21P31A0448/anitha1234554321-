import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getstudents")
      .then((response) => {
        console.log(response.data.studentdata);
        setStudents(response.data.studentdata);
      })
      .catch((error) => {
        console.error(error);
      });  
  }, []);

  const handleDelete = (studentId) => {
    axios.delete(`http://localhost:5000/deletestudent/${studentId}`)
      .then(() => {
        alert('Deleted Successfully')
        window.location.reload()
        setStudents(students.filter(student => student._id !== studentId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getManagerName = (student) => {
    return student.manager || "-";
  };

  const getEmployeeName = (student) => {
    return student.manager || "-";
  };

  return (
    <div>
      <h4>Student List</h4>
      <table border="1" style={{ borderCollapse: "collapse", width: "1000px" }}>
        <thead style={{backgroundColor:'black', color:'white', fontSize:'13px'}}>
          <tr>
            <th>Sl.no</th>
            <th>Username</th>
            <th>Title</th>
            <th>Description</th>
            <th>Reqiurement</th>
            <th>Deadline</th>
            <th>MAnager Assigned Status</th>
            <th>Manager</th>
            <th>Employees Assigned Status</th>
            <th>Employees</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{fontSize:'13px'}}>
          {students && students.map((student, index, arr) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{student.username}</td>
              <td>{student.projecttitle}</td>
              <td>{student.projectdescription}</td>
              <td>{student.projectrequirement}</td>
              <td>{student.deadline}</td>
              <td>{student.manager ? 'Assigned' : 'Not Assigned'}</td>
              <td>{getManagerName(student)}</td>
              <td>{student.employees ? 'Assigned' : 'Not Assigned'}</td>
              <td>{getEmployeeName(student)}</td>
              <td>{student.status}</td>
              <td>
              <Link to={`/editform/${student._id}`}><button style={{marginLeft:'10px', marginTop:'10px', marginBottom:'10px', backgroundColor:'darkcyan', color:'white', border:'none', padding:'8px', borderRadius:'8px'}}>Edit</button></Link>
                <button style={{marginLeft:'10px', backgroundColor:'red', color:'white', border:'none', padding:'8px', borderRadius:'8px'}} onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;