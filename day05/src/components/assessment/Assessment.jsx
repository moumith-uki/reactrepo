import { useState } from "react";
export default function Form(){
const [formData,setFormData]= useState({
    Firstname:"",
    Lastname:"",
    Email:"",
    Gender:"",
    Address:"",
    Description:""

})
const [submittedList,setSubmittedList]=useState([]);

const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prevData)=>({
        ...prevData,[name]:value

    }));
}  
const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmittedList((prevData)=>[...prevData,formData]);
        setFormData({Firstname:"",Lastname:"",Email:"",Gender:"",Address:"",Description:""})
    }
    

return(
    <>
        <form className="m-5">
            <h1>Fill the form</h1>
            <div className="form-floating m-5">
                <input type="text"  
                className="form-control" 
                onChange={handleChange} 
                name="Firstname"
                value={formData.Firstname}/>
                
                <label>First name</label>
            </div>
            <div className="form-floating m-5">
                <input type="text"  
                className="form-control" 
                onChange={handleChange} 
                name="Lastname"
                value={formData.Lastname}/>

                <label>Last name</label>
            </div>
            <div className="form-floating m-5">
                <input type="text"  
                className="form-control" 
                onChange={handleChange} 
                name="Email"
                value={formData.Email}/>

                <label>Email</label>
            </div>
            <div className="m-5">
                <p className="fw-bold text-muted">Gender</p>
                <label>
                <input type="radio" 
                    name="gender" 
                    value="male"
                    onChange={handleChange}/>
                Male
                </label><br />
                <label>
                    <input type="radio" 
                    name="gender"
                    value="Female"
                    onChange={handleChange}/>
                Female
                </label>
            </div>
            <div className="form-floating m-5 ">
                <input type="text"  
                className="form-control" 
                onChange={handleChange} 
                value={formData.Address}
                name="Address"/>

                <label>Address</label>
            </div>
            <div>
                <textarea name="Description" 
                cols={50} rows={15} 
                onChange={handleChange} 
                value={formData.Description} 
                className="m-5" 
                placeholder="Write something"></textarea>
            </div>
            <button className="btn btn-primary m-5 mt-2" type="submit" onClick={handleSubmit}>submit</button>
        </form>    
         <table border={1} className="border-collapse m-5 table">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Description</th>
                </tr>

                {submittedList.map((item)=>(

                 <tr>
                 <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.address}</td>
                    <td>{item.comment}</td>
                 </tr>
          
            ))}
            
            
            </table> 
        
    </>
)

}