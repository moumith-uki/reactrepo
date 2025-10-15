import './Style.css'
export default function Exercise(){
    var students =[
        {ID:'#001',Name:'Maya',Age:'21',Course:'React',Grade:'A'},
        {ID:'#002',Name:'Arun',Age:'22',Course:'JavaScript',Grade:'B'},
        {ID:'#003',Name:'Meena',Age:'20',Course:'HTML & CSS',Grade:'A'},
        {ID:'#004',Name:'Ravi',Age:'23',Course:'Node.js',Grade:'B+'},
        {ID:'#005',Name:'Priya',Age:'21',Course:'Python',Grade:'A-'},
        {ID:'#006',Name:'Karthik',Age:'22',Course:'Java',Grade:'B'},
        {ID:'#007',Name:'Ananya',Age:'20',Course:'CSS & Bootstrap',Grade:'A'}

    ]
    return(
       <table border={3} style={{padding:'3px',backgroundColor:'blanchedalmond',margin:'300px'}}>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Grade</th>
           
        </tr>
        <tr>
            <td>{students[0].ID}</td>
            <td>{students[0].Name}</td>
            <td>{students[0].Age}</td>
            <td>{students[0].Course}</td>
            <td>{students[0].Grade}</td>
        </tr>
            <tr>
            <td>{students[1].ID}</td>
            <td>{students[1].Name}</td>
            <td>{students[1].Age}</td>
            <td>{students[1].Course}</td>
            <td>{students[1].Grade}</td>
        </tr>
            <tr>
            <td>{students[2].ID}</td>
            <td>{students[2].Name}</td>
            <td>{students[2].Age}</td>
            <td>{students[2].Course}</td>
            <td>{students[2].Grade}</td>
        </tr>
            <tr>
            <td>{students[3].ID}</td>
            <td>{students[3].Name}</td>
            <td>{students[3].Age}</td>
            <td>{students[3].Course}</td>
            <td>{students[3].Grade}</td>
        </tr>
            <tr>
            <td>{students[4].ID}</td>
            <td>{students[4].Name}</td>
            <td>{students[4].Age}</td>
            <td>{students[4].Course}</td>
            <td>{students[4].Grade}</td>
        </tr>
            <tr>
            <td>{students[5].ID}</td>
            <td>{students[5].Name}</td>
            <td>{students[5].Age}</td>
            <td>{students[5].Course}</td>
            <td>{students[5].Grade}</td>
        </tr>
            <tr>
            <td>{students[6].ID}</td>
            <td>{students[6].Name}</td>
            <td>{students[6].Age}</td>
            <td>{students[6].Course}</td>
            <td>{students[6].Grade}</td>
        </tr>
       </table>
    );
}