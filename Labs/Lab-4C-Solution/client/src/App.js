import React,{useState, useEffect} from 'react';
import './App.css';
import Table from './components/Table.js';

function App() {
  const [loading,setLoading] = useState(true)
  const [employees,setEmployees] = useState([])
  const [input, setInput] = useState({
    id:"",
    first_name:"",
    last_name:"",
    email:"",
    department:"",
    salary:"",
    last_promoted:""
  })

  const handleChange = (e) => {
    let temp = {...input}
    temp[e.target.name] = e.target.value
    setInput(temp)
  }

  const handleSubmit = () => {
    fetch('http://localhost:8000/api/employee',{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input) 
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setLoading(true)
      getEmployees()
    })
    setInput({
      id:"",
      first_name:"",
      last_name:"",
      email:"",
      department:"",
      salary:"",
      last_promoted:""
    })
  }

  const handleUpdate = () => {
    fetch('http://localhost:8000/api/employee',{
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input) 
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setLoading(true)
      getEmployees()
    })

  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/api/employee/${id}`,{
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setLoading(true)
      getEmployees()
    })
  }
  const handleSearch = () => {
    fetch(`http://localhost:8000/api/employee/search/${input.search}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setEmployees(res)
      setLoading(false)
    })
  }

  const handleSalarySearch = () => {
    fetch(`http://localhost:8000/api/employee/salary?high=${input.salaryHigh}&low=${input.salaryLow}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setEmployees(res)
      setLoading(false)
    })
  }

  const handleIdSearch = () => {
    fetch(`http://localhost:8000/api/employee/id/${input.idSearch}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.length === 0){
        //if not found
        setLoading(false)
        setEmployees(res)
      }else{
        setEmployees(res)
        setLoading(false)
        let employee = res[0]
        //load found employee into input form
        let temp = {...employee,
          id:employee._id
        }
        setInput(temp)

      }
    })
  }
  const getEmployees = () => {
    fetch('http://localhost:8000/api/employees')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setEmployees(res)
      setLoading(false)
    })
  }
  useEffect(()=>{
  
    getEmployees()

  },[])
  if(loading)
    return <div>loading...</div>
  return (
    <div>
      
      <div style={{display:"flex"}}>
        <div style={{margin:"20px"}}>
          <div>
            <p>Id</p>
            <input name="id" value={input.id} onChange={handleChange} />
          </div>
          
          <div>
            <p>First Name</p>
            <input name="first_name" value={input.first_name} onChange={handleChange} />
          </div>
          <div>
            <p>Last Name</p>
            <input name="last_name" value={input.last_name} onChange={handleChange} />
          </div>
          <div>
            <p>Email</p>
            <input name="email" value={input.email} onChange={handleChange} />
          </div>
        </div>
        <div style={{margin:"20px"}}>
          <div>
            <p>Department</p>
            <input name="department" value={input.department} onChange={handleChange} />
          </div>
          
          <div>
            <p>Salary</p>
            <input name="salary" value={input.salary} onChange={handleChange} />
          </div>
          <div>
            <p>Last Promoted</p>
            <input name="last_promoted" value={input.last_promoted} onChange={handleChange} />
          </div>
          <div style={{marginTop:"10px"}}>
            <p>Submit/Update</p>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleUpdate}>Update</button>

          </div>
        </div>
        <div style={{margin:"20px",float:"right"}}>
        
        </div>
      </div>
      <div style={{margin:"20px"}}>
        <p>Search</p>
        <input name="search" value={input.search} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div style={{margin:"20px"}}>
        <p>Salary Range Search (High, Low)</p>
        <input name="salaryHigh" value={input.salaryHigh} onChange={handleChange} />
        <input name="salaryLow" value={input.salaryLow} onChange={handleChange} />
        <button onClick={handleSalarySearch}>Search</button>
      </div>
      <div style={{margin:"20px"}}>
        <p>Id Search </p>
        <input name="idSearch" value={input.idSearchh} onChange={handleChange} />
        <button onClick={handleIdSearch}>Search</button>
      </div>
      <div style={{margin:"20px"}}>
        <p>Get All Employees </p>
        <button onClick={getEmployees}>Search</button>
      </div>
     <div style={{margin:"20px"}}>
      <Table handleDelete={handleDelete} employees={employees}/>
     </div>
    </div>
  );
}

export default App;
