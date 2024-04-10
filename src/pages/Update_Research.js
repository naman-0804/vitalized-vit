import {useParams,useNavigate} from 'react-router-dom'
import { useEffect,useState } from 'react'
import supabase from '../config/supabaseClient'

const Update = () => {
  const {id} =useParams()
  const navigate = useNavigate()
  const [Title,setTitle]=useState('')
  const [Domain,setDomain]=useState('')
  const [Requirements,setRequirements]=useState('')
  const [Reference_Papers,setReference_Papers]=useState('')
  const [Research_id,setResearch_id]=useState('')
  const [formError,setFormError]=useState(null)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!Title || !Domain || !Requirements || !Reference_Papers || !Research_id){
      setFormError('All fields are required')
      return
    }
  const {data,error} = await supabase
    .from('Research')
    .update({Title,Domain,Requirements,Reference_Papers,Research_id})
    .eq('Research_id',id)
    .select()
    if(error){
      console.log(error)
      setFormError('An error occured while updating')
    }
    if(data){
      console.log(data)
      setFormError(null)
      navigate('/')
    }
    
  }
  useEffect(()=>{
    const fetchResearch = async () => {
      const {data,error} = await supabase
      .from('Research')
      .select()
      .eq('Research_id',id)
      .single()
      if(error){
        navigate('/',{replace:true})
      }
      if(data){
        setTitle(data.Title)
        setDomain(data.Domain)
        setRequirements(data.Requirements)
        setReference_Papers(data.Reference_Papers)
        setResearch_id(data.Research_id)
        console.log(data)
      }
    }
    fetchResearch()
  },[id,navigate])
  return (
    <div className="page update">
      <form onSubmit={handleSubmit}>
        <label htmlFor='Title'>Title:</label>
        <input type='text' 
        id='title' 
        value={Title} 
        onChange={(e)=>setTitle(e.target.value)}
        />
        <label htmlFor='Desc'>Domain:</label>
        <textarea
        id='Desc'
        value={Domain}
        onChange={(e)=>setDomain(e.target.value)}
        ></textarea>
        <label htmlFor='Req'>Requirements</label>
        <textarea
        id='Req'
        value={Requirements}
        onChange={(e)=>setRequirements(e.target.value)}
        />
        <label htmlFor='Ref'>References</label>
        <textarea
        id='Ref'
        value={Reference_Papers}
        onChange={(e)=>setReference_Papers(e.target.value)}
        />
        <label htmlFor='Refid'>Research ID:</label>
        <input type='text'
        id='Refid'
        value={Research_id}
        onChange={(e)=>setResearch_id(e.target.value)}
        />
        <button>Update</button>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  )
}

export default Update