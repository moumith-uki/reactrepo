import { useState,useEffect } from "react"
export default function Home(){
    const [formData, setFormData]=useState({
        Username:"",
        Email:"",
        Comment:"",
    })
    const[submittedList , setSubmittedList] =useState([]);

    const handleChange=(e)=>{
        const {name}=e.target;
        const {value}=e.target;

        setFormData((prevData)=>({
            ...prevData,[name]:value,
        }));

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert (`Username: ${formData.Username}
Email: ${formData.Email}
Comment: ${formData.Comment}`
        )

        setSubmittedList((prevData)=>[...prevData,formData])
        setFormData({Username:"",Email:"",Comment:""})
        
    }
    return(
        <>
        <form>
        <div className="form-floating m-5">
            <input type="text" className="form-control" name="Username" value={formData.Username} onChange={handleChange}/>
            <label className="form-label">Username</label>
        </div>
        <div className="form-floating m-5">
            <input type="text" className="form-control" name="Email" value={formData.Email} onChange={handleChange}/>
            <label className="form-label">Email</label>
        </div>
        <div className="m-5">
          <textarea name="Comment" cols={40} rows={10} id="textarea" placeholder="Write here" value={formData.Comment} onChange={handleChange}></textarea><br />
          <button className="btn btn-outline-success text-dark" onClick={handleSubmit}>submit</button>
        </div>
        </form>
      
        
        
        </>
    )
}