import React, { useState } from "react";

export default function Form2() {
  const [form, setform] = useState({
    name: "",
    email: "",
    description: "",
    country: "INDIA",
    gender: "",
    agree:false,
  });

  const [error,seterror]=useState({})
  //   const [email, setEmail] = useState("");

  const onChange = (e) => {
    const { value, name, type, checked } = e.target;
    setform((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const showData = () => {
    console.log("Form : ", form);
  };

  const onSubmit = (e) => {
    // showData();
    e.preventDefault();
    if(form.name.length <4){
        seterror((state)=>({
            ...state,
            name:"too short"
        }))
        return;

    }else{
        seterror((state)=>({
            ...state,
            name:''
        }))
    }
    showData();
  };


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input onChange={onChange} name="name" value={form.name} />
          </label>
          <hr />
          {!!error.name &&(
            <div>
                <i>{error.name}</i>
            </div>
          )}

          <label>
            Email:
            <input onChange={onChange} name="email" value={form.email} />
          </label>
          <hr />

          <label>
            Description:
            <textarea
              onChange={onChange}
              name="description"
              value={form.description}
            />
          </label>
          <hr />

          <label htmlFor="">
            country :
            <select onChange={onChange} name="country" value={form.country}>
              <option value="india">INDIA</option>
              <option value="usa">U.S.A</option>
              <option value="uk">U.k</option>
            </select>
          </label>
          <hr />

          <label>
            Gender:
            <div>
              <input
                onChange={onChange}
                type="radio"
                value="male"
                name="gender"
              />
              Male
              <input
                onChange={onChange}
                type="radio"
                value="female"
                name="gender"
              />
              Female
              <input
                onChange={onChange}
                type="radio"
                value="others"
                name="gender"
              />
              Others
            </div>
          </label>
          <hr />

          <label>
            english
            <input
              type="checkbox"
              onChange={onChange}
              name="english"
              value={form.agree}
            /><label>
              hindi
              <input
              type="checkbox"
              onChange={onChange}
              name="hindi"
              value={form.agree}
            />
            
</label>

            
          </label>

          <div>
            <button onClick={showData}>submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}
