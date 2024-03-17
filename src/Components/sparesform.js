import { useState } from "react";
import axios from "axios";

const Formzz = () => {
  const [formdata, setFormdata] = useState({ title: '',  price: '', category: '', image: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    axios.post('http://localhost:5000/addspares', { formdata })
      .then((response) => {
        window.location.reload()
        alert("Submitted Successfully")
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setFormdata({ ...formdata, title: e.target.value })}
        /><br />
        <label>Price</label>
        <input
          type="number"
          name="price"
          onChange={(e) => setFormdata({ ...formdata, price: e.target.value })}
        /><br />
        <label>Category</label>
        <input
          type="text"
          name="category"
          onChange={(e) => setFormdata({ ...formdata, category: e.target.value })}
        /><br />
        <label>Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setFormdata({ ...formdata, image: e.target.value })}
        /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Formzz;