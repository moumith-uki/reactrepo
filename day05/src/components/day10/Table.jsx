import { useState } from "react"

export default function Table(){

    const data=[
        {id:1,name:"Apple",category:"Fruit",color:"Red",origin:"USA",taste:"Sweet",price:2},
        {id:2,name:"Carrot",category:"Vegetable",color:"Orange",origin:"India",taste:"Sweet",price:1},
        {id:3,name:"Banana",category:"Fruit",color:"Yellow",origin:"Sri Lanka",taste:"Sweet",price:1.5},
    ]
    const [searchTerm,setSearchTerm] = useState("");
    const filteredData = data.filter((item)=>{
        const values = Object.values(item).join("").toLowerCase();
        return values.includes(searchTerm.toLowerCase());
    })

    const fieldNames = Object.keys(data[0]);
    return(
        <>
        <p className="display-5 m-5">Global Search Across All field</p>
        <input type="text" placeholder="Search Things" className="form-control p-3 m-5" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <table className="m-5 border">
            <tr className="border">
                <th className="p-3">id</th>
                <th className="p-3">Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Color</th>
                <th className="p-3">Origin</th>
                <th className="p-3">Taste</th>
                <th className="p-3">Price</th>
            </tr>
            {/* {data.map((item)=>(
                <tr className="border">
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3"> {item.color}</td>
                <td className="p-3">{item.origin}</td>
                <td className="p-3">{item.taste}</td>
                <td className="p-3">{item.taste}</td>
                </tr>
            ))} */}

                  {filteredData.length > 0 ?(
            filteredData.map((item,index)=>(
                <tr key={index}>
                    {fieldNames.map((field)=>(
                        <td key={field}>{item[field]}</td>
                    ))}
                </tr>
            ))
        ):(
            <tr>
                <td colSpan={fieldNames.length}>No matching results found</td>
            </tr>
        )}
        
        </table>
        
        </>
    )
}