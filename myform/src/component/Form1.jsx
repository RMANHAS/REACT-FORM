// import React, { useState } from "react";

// export default function Form1() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = (e)=>{
//        e.preventDefault();

//     console.log(Name :${name} \n Email : ${email} \n Password : ${password});
//   }
//   return (
//     <div>
//       <h1>Form handling in reactJS</h1>
//       <hr />
//       <form>
//         <label htmlFor="">Username</label>
//         <input type="text" value={name}
//         onChange={(e)=>setName(e.target.value)} />
//         <br />
//         <label htmlFor="">Email</label>
//         <input type="email" value={email}
//         onChange={(e)=>setEmail(e.target.value)} />
//         <br />
//         <label htmlFor="">Password</label>
//         <input type="password" value={password}
//         onChange={(e)=>setPassword(e.target.value)}/>
//         <br />
//         <button onClick={handleSubmit}>Sumbit</button>
//       </form>
//     </div>
//   );
// }

import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Form1() {
  const initialvalues = {
    username: "",
    email: "",
    password: "",
    occupation: "",
    gender: " ",
    languages: []
  };
  const [data, setData] = useState(initialvalues);
  const [errors, setErrors] = useState({});
  // const spanpad={paddingRight:'10px'}
  // const color={color:'red'}

  const handleChange = (e) => {
    if (e.target.name === "languages") {
      // console.log("hello lanhuage")
      if (e.target.checked) {
        console.log(e.target.value);
        console.log(e.target.name);
        data.languages.push(e.target.value);
      }
      else{
        data.languages=data.languages.filter((lang)=>lang!==e.target.value)
      }
      setData(data)
    }
    
    else{
      setData({ ...data, [e.target.name]: e.target.value });
    }
    // console.log(data);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(data));
try {
  const res =await axios.post(` http://localhost:3030/posts`,{
    username:data.username,
    email:data.email,
    password:data.password,
    occupation:data.occupation,
    gender:data.gender,
    languages:data.languages

  })
  console.log(res)
  
} catch (error) {
  console.log(error)
  
}





    console.log(data);



    // alert('record added successfully')
    toast.success('user Added successfully',{autoClose:2000,position:toast.POSITION.TOP_CENTER})
    toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     
      });
  }

  function validate(data) {
    let errors = {};
    if (!data.username) errors.username = "username is required";
    if (!data.email) errors.email = "email is required";
    if (!data.password) errors.password = "password is required";
    return errors;
  }

  return (
    <div>
      <h1>Form handling in reactJS</h1>
      <hr />
      <form>
        <label htmlFor="">Username :-</label>
        <input
        
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        {errors.username}
        <br />
        
      
        <label htmlFor="">Email :-</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        {errors.email}
        <br />
        <label htmlFor="">Password :-</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        {errors.password}
        <br />
        <label htmlFor="">occupation</label>
        <select name="occupation" onChange={handleChange}>
          <option value="Bussiness">Bussiness</option>
          <option value="pilot">pilot</option>
          <option value="employee">employee</option>
        </select>
        <br />
        <label htmlFor="">Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        female
        <input
          type="radio"
          name="gender"
          value="others"
          onChange={handleChange}
        />
        others
        <br />
        <label htmlFor="">Language</label>
        <br />
        <input
          type="checkbox"
          name="languages"
          value="js"
          onChange={handleChange}
        />
        js
        <input
          type="checkbox"
          name="languages"
          value="react"
          onChange={handleChange}
        />
        react
        <input
          type="checkbox"
          name="languages"
          value="mongo"
          onChange={handleChange}
        />
        mongo
        <br />
        <button onClick={handleSubmit}>Sumbit</button>
      </form>
    </div>
  );
}
