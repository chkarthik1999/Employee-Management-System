import React, { useState, useEffect } from 'react'
import {Link,useNavigate, useParams} from 'react-router-dom'
import EmployeeServices from '../services/EmployeeServices'

const AddComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setemailId] = useState('')
  const navigate = useNavigate();
  const {id} = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = {firstName, lastName, emailId}

    if(id){
        EmployeeServices.updateEmployee(id, employee).then((response) =>{
            navigate('/employees',{replace:true})
        }).catch(error =>{
            console.log(error);
        })
    }
        EmployeeServices.createEmployee(employee).then((response) =>{

            console.log(response.data)
    
            navigate('/employees',{replace:true});
    
        }).catch(error => {
            console.log(error)
        })
       
    }

  useEffect(() =>{
    EmployeeServices.getEmployeeById(id).then((response) =>{
        setFirstName(response.data.firstName)
        setFirstName(response.data.LastName)
        setemailId(response.data.emailId)
    }).catch(error =>{
        console.log(error)
    })
  },[])

  const title =() => {
    if(id){
        return <h2 className="text-center">Update Employee</h2>
    }
    else{
        return <h2 className="text-center">Add Employee</h2>
    }
  }
  return (
    <div>
        <br></br>
      <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                   {
                    title()
                   }
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name:</label>
                                <input
                                    type = "text"
                                    placeholder="Enter first name"
                                    name="firstName"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e)=> setFirstName(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input
                                    type = "text"
                                    placeholder="Enter last name"
                                    name="lastName"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e)=> setLastName(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Email-Id:</label>
                                <input
                                    type = "text"
                                    placeholder="Enter emailId"
                                    name="emailId"
                                    className="form-control"
                                    value={emailId}
                                    onChange={(e)=> setemailId(e.target.value)}>
                                </input>
                            </div>
                            <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                            <Link to={"/employees"} className="btn btn-danger" style={{marginLeft:"15px"}}>Cancel</Link>
                        </form>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddComponent