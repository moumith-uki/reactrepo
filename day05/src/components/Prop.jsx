export default function Prop(prop){
    const {data}=prop;
    const {name,color,about}=data
    return(
        <>
        <h1>{prop.data.about}</h1>
        <h1>{prop.data.name}</h1>
        <h1>{prop.data.color}</h1>
{
    about.map((data1)=>
    <div>{data1}</div>
    )
    
}
{
    name.map((data2)=>
    <div>{data2}</div>)
}
{
    color.map((data3)=>
    <div>{data3}</div>)
}
    </>
    );
}