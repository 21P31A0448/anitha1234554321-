import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditFormz = () => {
  const [formdata, setFormdata] = useState({ projecttitle: '', projectdescription: '', projectrequirement: '', deadline: '', manager: '', employees: '' }); // Match the field names with your backend
    
  const {id} = useParams()
  useEffect(() => {
    axios.get('http://localhost:5000/getstudentbyid/'+id)
    .then((res) => {
      console.log(res.data.studentdata)
      setFormdata(res.data.studentdata)
    })
    .catch((err) => console.log(err))
  }, [id])


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios.put('http://localhost:5000/updatestudent/'+id, formdata )
      .then((response) => {
        console.log(response)
        window.location.reload()
        alert("Submitted Successfully")
      })
  };

  return (
    <div>
  <h1>Form</h1>
  <form onSubmit={handleSubmit}>
    <label style={{color:'black'}}>Project Title</label>
    <input
      value={formdata.projecttitle}
      type="text"
      name="projecttitle"
      onChange={(e) => setFormdata({ ...formdata, projecttitle: e.target.value })}
    /><br />
    <label style={{color:'black'}}>Project Description</label>
    <input
      value={formdata.projectdescription}
      type="text"
      name="projectdescription"
      onChange={(e) => setFormdata({ ...formdata, projectdescription: e.target.value })}
    /><br />
    <label style={{color:'black'}}>Project Reqiurement</label>
    <input
      value={formdata.projectrequirement}
      type="text"
      name="projectrequirement"
      onChange={(e) => setFormdata({ ...formdata, projectrequirement: e.target.value })}
    /><br />
    <label style={{color:'black'}}>Assign Manager</label>
        <input
        value={formdata.manager}
        type="text"
        name="manager"
        onChange={(e) => setFormdata({ ...formdata, manager: e.target.value })}
        /><br />
    <label style={{color:'black'}}>Assign Employees</label>
        <input
        value={formdata.employees}
        type="text"
        name="employees"
        onChange={(e) => setFormdata({ ...formdata, employees: e.target.value })}
        /><br />
    <label style={{color:'black'}}>Status</label>
    <select
    value={formdata.status}
    onChange={(e) => setFormdata({ ...formdata, status: e.target.value })}>
      <option value="Working">Working</option>
      <option value="Completed">Completed</option>
    </select>
    <input type="submit" value="Submit" />
  </form>
</div>
  );
};

export default EditFormz;