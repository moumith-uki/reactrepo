export default function Table(Props){
    const {table}=Props;
    const {EmpID,Name,Department,Position,Salary,Joined}=table;
{
    EmpID.map((data1)=>
    <div>
        {data1}
    </div>)
}
}