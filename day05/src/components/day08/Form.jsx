import { useState } from "react";

export default function Form(){
    const [formData,setFormData]=useState({
        username:"",
        email: "",
        password:"",
    })

    const [submittedList,setSubmittedList] = useState([]);
    const handleChange=(e)=>{
        const {name}=e.target;
        const {value}=e.target;
            
        setFormData((prevData)=>({
            ...prevData, [name]:value,
        }));
       
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        setSubmittedList((prevList)=>[...prevList,formData]);
        setFormData({username:"",email:"",password:""})
    }

    return(
        <>
        <div>
            <form style={{padding:100, textAlign: "center" }}>
                <input type="text" placeholder="Username" value={formData.username} name="username" onChange={handleChange} className="form-label"/><br />
                <input type="email" placeholder="Email" value={formData.email} name="email" onChange={handleChange} className="form-label"/><br />
                <input type="password" placeholder="Password" value={formData.password} name="password" onChange={handleChange} className="form-label" /><br />
                <input type="submit" onClick={handleSubmit} className="btn btn-outline-warning"/>
            </form>
        </div>
         {submittedList.length > 0 &&(
        <div>
            <h3>All submitted Data:</h3>
            {submittedList.map((item)=>(
                <>
                <span>Username: {item.username}</span><br />
                <span>Email: {item.email}</span><br />
                <span>Password: {item.password}</span><br />
                </>
            ))}
        </div>
         )
}
</>
    )   
}
