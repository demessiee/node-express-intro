import React,{useState, useEffect} from 'react';

function App() {
  const [loading,setLoading] = useState(true)
  const [employees,setEmployees] = useState([])

  const getEmployees = () => {
    fetch('http://localhost:8000/api/employees')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setLoading(false)
      setEmployees(res)
    })
  }
  useEffect(()=>{
      getEmployees()
  },[])
  if(loading)
    return <div>loading...</div>
  return (
    <div>
      Number of Employees: {employees.length}
   
    </div>
  );
}

export default App;
