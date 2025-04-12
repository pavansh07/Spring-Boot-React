import { useState, useEffect } from "react"; 
import axios from "axios"; 
function App() { 
const [employees, setEmployees] = useState([]); 
const [name, setName] = useState(""); 
const [role, setRole] = useState(""); 
useEffect(() => { 
    axios.get("http://localhost:8080/api/employees") 
          .then(response => setEmployees(response.data)) 
          .catch(error => console.error("Error fetching employees:", error)); 
      }, []); 
    const addEmployee = () => { 
    axios.post("http://localhost:8080/api/employees", { name, role }) .then(response => { 
      setEmployees([...employees, response.data]); // Update list 
      setName(""); 
      setRole(""); 
            }) 
            .catch(error => console.error("Error adding employee:", error)); 
    }; 
  return ( 
  <div style={{ textAlign: "center", marginTop: "50px" }}> 
  <h1>Employee List</h1> 
  <ul> 
  {employees.map(emp => ( 
  <li key={emp.id}>{emp.name} - {emp.role}</li> 
          ))}
  </ul> 
  <h2>Add Employee</h2> 
  <input  
  type="text" placeholder="Name" value={name} 
  onChange={(e) => setName(e.target.value)} 
  /> 
  <input  
  type="text" placeholder="Role" value={role} 
  onChange={(e) => setRole(e.target.value)} 
  /> 
  <button onClick={addEmployee}>Add</button> 
  </div> 
    ); 
  } 
  export default App;
