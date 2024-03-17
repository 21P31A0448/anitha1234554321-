import { useState } from "react";
import axios from "axios";

const Formz = ({username}) => {
  const [formdata, setFormdata] = useState({username: username, projecttitle: '', projectdescription: '', projectrequirement: '', deadline: '', manager: '', employees: '', status:'' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);

    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:5000/addstudent', {formdata});
      console.log(response.data);

      alert("Submitted Successfully");
    } catch (error) {
      console.error(error);
    }
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
          required
        /><br />
        <label style={{color:'black'}}>Project Description</label>
        <input
          value={formdata.projectdescription}
          type="text"
          name="projectdescription"
          onChange={(e) => setFormdata({ ...formdata, projectdescription: e.target.value })}
          required
        /><br />
        <label style={{color:'black'}}>Project Reqiurement</label>
        <input
          value={formdata.projectrequirement}
          type="text"
          name="projectrequirement"
          onChange={(e) => setFormdata({ ...formdata, projectrequirement: e.target.value })}
          required
        /><br />
        <label style={{color:'black'}}>Deadline</label>
        <input
          value={formdata.deadline}
          type="date"
          name="deadline"
          onChange={(e) => setFormdata({ ...formdata, deadline: e.target.value })}
          required
        /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Formz;