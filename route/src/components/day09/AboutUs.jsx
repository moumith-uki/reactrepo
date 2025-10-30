export default function AboutsUs(){
    return(
        <>
       <h1>Sample Table</h1>
       <table className="border-collapse border-dark m-5">
        <tr className="m-5">
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
        </tr>
        <tr className="m-5">
            <td>1</td>
            <td>Alice</td>
            <td>26</td>
            <td>alice@example.com</td>
        </tr>
        <tr className="m-5">
            <td>2</td>
            <td>Bob</td>
            <td>30</td>
            <td>bob@email.com</td>
        </tr>
          <tr className="m-5">
            <td>3</td>
            <td>Bob</td>
            <td>30</td>
            <td>bob@email.com</td>
        </tr>
       </table>
        </>
    )
}