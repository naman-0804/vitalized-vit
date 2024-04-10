import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../config/supabaseClient'
const Create = () => {
  const navigate = useNavigate()
  const [Title,setTitle]=useState('')
  const [Domain,setDomain]=useState('')
  const [Requirements,setRequirements]=useState('')
  const [Reference_Papers,setReference_Papers]=useState('')
  const [Research_id,setResearch_id]=useState('')
  const [formError,setFormError]=useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!Title || !Domain || !Requirements || !Reference_Papers || !Research_id){
      setFormError('All fields are required')
      return
    }
    const {data,error} = await supabase
    .from('Research')
    .insert([
      {Title,Domain,Requirements,Reference_Papers,Research_id}])
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
        <label htmlFor='Title'>Title: </label>
        <input type='text' 
        id='title' 
        value={Title} 
        onChange={(e)=>setTitle(e.target.value)}
        />
        <label htmlFor='desc'>Domain:</label>
        <textarea
        id='dom'
        value={Domain}
        onChange={(e)=>setDomain(e.target.value)}
        ></textarea>
        <label htmlFor='Req'>Requirements:</label>
        <textarea
        id='Req'
        value={Requirements}S
        onChange={(e)=>setRequirements(e.target.value)}
        />
        <label htmlFor='ref'>Reference:</label>
        <textarea
        id='ref'
        value={Reference_Papers}
        onChange={(e)=>setReference_Papers(e.target.value)}
        ></textarea>
        <label htmlFor='refid'>Research ID:</label>
        <input type='text'
        id='refid'
        value={Research_id}
        onChange={(e)=>setResearch_id(e.target.value)}
        />
        <button>List Research </button>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  )
}

export default Create