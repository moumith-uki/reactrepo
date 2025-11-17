import { useState } from "react"

export default function Travel(){
    const data =[
        {title:"Oceanview Resort" ,city:"Galle",Price:"$85"},
        {title:"Mountain Retreat", city:"Nuwara Eliya",Price:"$72"},
        {title:"City Central Hotel", city:"Colombo",Price:"$110"},
        {title:"Lakeside Villas", city:"Kandy", Price:"$95"}
    ];
    const[searchTerm,setSearchTerm]=useState("");

    const filterData =data.filter((item)=>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()
)
);
    const handleSubmit =(item)=>{
        alert (`You booked ${item.title}`)
    }

    return(
        
        <>
        
            <div className="container">
               <div className="text-center">
                    <p className="display-5 text-success fw-bold">Travel Booking App</p>
                    <input type="text" placeholder="Search Hotel" className="form-control" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
               </div>
               <div className="row mt-5">
                    {filterData.map(item=>(
                        <div className="col card p-3 m-1">
                            <span className="fs-3 text-center fw-bold">{item.title}</span>
                            <span className="text-center m-3">city: {item.city}</span>
                            <span className="text-center m-3">Price per Night: {item.Price}</span>
                            <button className="btn bg-success text-light" onClick={()=>handleSubmit(item)}>Book Now</button>
                        </div>
                    ))}
                       
               </div>
            </div>
        </>
    )
}