import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../config/supabaseClient'
const Create = () => {
  const navigate = useNavigate()
  const [Project_Title,setProject_Title]=useState('')
  const [Domain,setDomain]=useState('')
  const [P_id,setP_id]=useState('')
  const [Proposed_on,setProposed_on]=useState('')
  const [Requirements,setRequirements]=useState('')
  const [Description,setDescription]=useState('')
  const [Type_of_Project,setType_of_Project]=useState('')
  const [formError,setFormError]=useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!Project_Title || !Domain || !P_id || !Proposed_on || !Requirements || !Description || !Type_of_Project){
      setFormError('All fields are required')
      return
    }
    const {data,error} = await supabase
    .from('Projects')
    .insert([
      {Project_Title,Domain,P_id,Proposed_on,Requirements,Description,Type_of_Project}])
      if(error){
      console.log(error)
      setFormError('An error occured while creating')
    }
    if(data){
      console.log(data)
      setFormError(null)
      navigate('/')
    }
  }
  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor='Project_Title'>Project Title: </label>
        <input type='text'
        id='Project_Title'
        value={Project_Title}
        onChange={(e)=>setProject_Title(e.target.value)}
        />
        <label htmlFor='desc'>Domain:</label>
        <textarea
        id='dom'
        value={Domain}
        onChange={(e)=>setDomain(e.target.value)}
        ></textarea>
        <label htmlFor='P_id'>Project ID:</label>
        <input type='text'
        id='P_id'
        value={P_id}
        onChange={(e)=>setP_id(e.target.value)}
        />
        <label htmlFor='Proposed_on'>Proposed on:</label>
        <input type='date'
        id='Proposed_on'
        value={Proposed_on}
        onChange={(e)=>setProposed_on(e.target.value)}
        />
        <label htmlFor='Req'>Requirements:</label>
        <textarea
        id='Req'
        value={Requirements}
        onChange={(e)=>setRequirements(e.target.value)}
        />
        <label htmlFor='desc'>Description:</label>
        <textarea
        id='desc'
        value={Description}
        onChange={(e)=>setDescription(e.target.value)}
        ></textarea>
        <label htmlFor='Type_of_Project'>Type of Project:</label>
        <input type='text'
        id='Type_of_Project'
        value={Type_of_Project}
        onChange={(e)=>setType_of_Project(e.target.value)}
        />
        <button>Create Project </button>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  )
}

export default Create